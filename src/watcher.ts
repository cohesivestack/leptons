import chokidar from 'chokidar';
import { build, writeToFile } from './builder';
import { Config, parseFromFile, isConfigErrors } from './config';

export class Watcher {

  private config: Config;
  private sourceWatcher: chokidar.FSWatcher;
  private configWatcher: chokidar.FSWatcher;

  private constructor(configPath: string, config: Config) {
    this.config = config;
  
    this.sourceWatcher = chokidar.watch(this.config.source, {
      persistent: true
    }).on("all", (event: string, path: string) => {
      console.log(event, path);
      writeToFile(this.config.output, build(this.config));
    });
  
    this.configWatcher = chokidar.watch(configPath, {
      persistent: true
    }).on("change", (path: string) => {
      console.log("change", path);
      this.sourceWatcher.unwatch(this.config.source);
  
      const newConfig = parseFromFile(configPath);
      if (isConfigErrors(newConfig)) {
        throw Error("Errors parsing plain object:\n" + newConfig);
      }
      this.config = newConfig;
  
      writeToFile(this.config.output, build(this.config));
      this.sourceWatcher.add(this.config.source);
    });
  }

  public close() {
    this.sourceWatcher.close();
    this.configWatcher.close();
  }

  public static watch(configPath: string, _config: Config) : Watcher {
    return new Watcher(configPath, _config);
  }
}

