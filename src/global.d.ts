/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}

// for commonjs modules
// NOTE: remove below if you install types for node. (for server developement)
interface RequireInterface {
  (module: string): any;
  ensure?(module: string): any;
}
declare var module: any;
declare var process: any;
declare var require: RequireInterface;
