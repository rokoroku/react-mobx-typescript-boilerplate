/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for commonjs modules
interface RequireInterface {
  (module: string): any;
  ensure?(module: string): any;
}
declare var module: any;
declare var process: any;
declare var require: RequireInterface;
