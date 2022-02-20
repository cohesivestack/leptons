import { isSourceWithContent, isSourceWithRegexpAndPath, Source } from "./source";
import chokidar from 'chokidar';
import { Config, isSchemaErrors, parseFromFile } from "./config";
import { Builder } from "./builder";
import { printOutSchemaErrors, SchemaError } from "./error";
import { ErrorObject } from "ajv";
import { debounce } from "./util";
import chalk from "chalk";

export class Watcher {

  private config?: Config;
  private sourceWatcher: chokidar.FSWatcher | undefined;
  private configWatcher: chokidar.FSWatcher | undefined;
  private debouncedBuild = debounce(this.build);

  constructor(private configPath: string) { }

  private setConfig() {
    const config = parseFromFile(this.configPath);

    if (isSchemaErrors(config)) {
      printOutSchemaErrors((config as ErrorObject[]).map(e => new SchemaError(e)));
      this.config = undefined;
    } else {
      this.config = config;
    }
  }

  private build() {
    if (this.config) {
      const builder = new Builder(this.config, true);
      builder.buildToFile();
      console.log(chalk.green("Leptons is watching"));
    }
  }

  private setSourceWatcher() {
    if (this.config && !this.sourceWatcher) {
      const sourcePaths = Watcher.extractPathsFromSource(this.config.source);

      this.sourceWatcher = chokidar.watch(sourcePaths, {
        persistent: true
      }).on("all", (event: string, path: string) => {

        console.log("Leptons is reading...", path)
        this.debouncedBuild();
      });
    }
  }

  public watch() {
    this.setConfig();
    this.setSourceWatcher();

    this.configWatcher = chokidar.watch(this.configPath, {
      persistent: true
    }).on("change", (path: string) => {
      console.log("reading...", path);

      if (this.config && this.sourceWatcher) {
        (this.sourceWatcher as chokidar.FSWatcher).unwatch(Watcher.extractPathsFromSource(this.config.source));
      }

      this.setConfig();
      this.debouncedBuild();

      if (this.config && this.sourceWatcher) {
        (this.sourceWatcher as chokidar.FSWatcher).add(Watcher.extractPathsFromSource(this.config.source));
      }
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