# Lazylibs

Small library to experiment with lazy loaded routes from external libraries.

Build with angular-cli 7.2

## Option 1: build from library code

The ideal solution is to build the lazy routes from distributed libraries. The libs are build with ng-packagr, following the angular package format.
This seems only be achievable with two downsides:

- a (soft) reference to the library modules must be available in app (see `__fake.ts`). This file should not be referenced, but is requried as otherwise the build process drops an error [see 1]
- JIT is not supported in this mode. Only `aot` builds are supported.

[1] `ERROR in ./src/$$_lazy_route_resource lazy namespace object Module not found: Error: Can't resolve [...]/dist/componentlib/comp-1/componentlib-comp-1.ngfactory.js' in '[...]/lazylibs/src/$$_lazy_route_resource'`

## Option 2: build from library source

If we switch our tsconfig paths to the embedded project, we still need to make a reference to the library code (using \_\_fake.ts file), but we can run it both in `jit` and `aot` mode.

The paths are configured in the main tsconfig:

```json
"paths": {
    "componentlib": ["projects/componentlib"],
    "componentlib/*": ["projects/componentlib/*"]
}
```
