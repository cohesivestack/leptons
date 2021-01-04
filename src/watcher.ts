import { isSourceWithContent, isSourceWithRegexpAndPath, Source } from "./source";
import chokidar from 'chokidar';
import { Config, isConfigErrors, parseFromFile } from "./config";
import { Builder } from "./builder";

export class Watcher {

  private config: Config;
  private sourceWatcher: chokidar.FSWatcher | undefined;
  private configWatcher: chokidar.FSWatcher | undefined;

  constructor(private configPath: string) {
    // Parse config
    const config = parseFromFile(this.configPath);

    if (isConfigErrors(config)) {
      throw Error("Errors parsing plain object:\n" + config);
    }

    this.config = config;
  }

  public watch() {

    // First build before start watching
    const builder = new Builder(this.config, true);
    builder.buildToFile();

    const sourcePaths = Watcher.extractPathsFromSource(this.config.source);

    this.sourceWatcher = chokidar.watch(sourcePaths, {
      persistent: true
    }).on("all", (event: string, path: string) => {
      console.log("reading...", path)
      const builder = new Builder(this.config, true);
      builder.buildToFile();
    });

    this.configWatcher = chokidar.watch(this.configPath, {
      persistent: true
    }).on("change", (path: string) => {
      console.log("reading...", path);
      (this.sourceWatcher as chokidar.FSWatcher).unwatch(Watcher.extractPathsFromSource(this.config.source));
  
      const newConfig = parseFromFile(this.configPath);
      if (isConfigErrors(newConfig)) {
        throw Error("Errors parsing plain object:\n" + newConfig);
      }
      this.config = newConfig;
  
      const builder = new Builder(this.config, true);
      builder.buildToFile();
      (this.sourceWatcher as chokidar.FSWatcher).add(Watcher.extractPathsFromSource(this.config.source));
    });
  }

  public static extractPathsFromSource(source?: Source): string[] {
    const _source: Source = source ? source : {"html": "**/*.html"}
    const sourcePaths: string[] = [];

    Object.keys(_source).forEach(sourceName => {
      // Ignore source with content
      if (!isSourceWithContent(_source, sourceName)) {

        if (isSourceWithRegexpAndPath(_source, sourceName)) {

          const sourceWithRegexpAndPath = (_source[sourceName] as any);
          if (Array.isArray(sourceWithRegexpAndPath.path)) {
            sourcePaths.push(...sourceWithRegexpAndPath.path as string[]);
          } else {
            sourcePaths.push(sourceWithRegexpAndPath.path as string);
          }

        } else {

          if (Array.isArray(_source[sourceName])) {
            sourcePaths.push(..._source[sourceName] as string[]);
          } else {
            sourcePaths.push(_source[sourceName] as string);
          }

        }
      }

    });

    return sourcePaths;
  }

}