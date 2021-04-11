---
title: tiro/compiler.h

---

# tiro/compiler.h

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro_compiler_settings](/docs/api/classes/structtiro__compiler__settings)** <br>An instance of this type can be passed to the compiler to configure it.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef enum [tiro_severity](/docs/api/files/compiler_8h#enum-tiro_severity) | **[tiro_severity_t](/docs/api/files/compiler_8h#typedef-tiro_severity_t)** <br>Defines the possible values for the severity of diagnostic compiler messages.  |
| enum| **[tiro_severity](/docs/api/files/compiler_8h#enum-tiro_severity)** { TIRO_SEVERITY_WARNING = 1, TIRO_SEVERITY_ERROR = 2}<br>Defines the possible values for the severity of diagnostic compiler messages.  |
| typedef struct [tiro_compiler_settings](/docs/api/classes/structtiro__compiler__settings) | **[tiro_compiler_settings_t](/docs/api/files/compiler_8h#typedef-tiro_compiler_settings_t)** <br>An instance of this type can be passed to the compiler to configure it.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[tiro_severity_str](/docs/api/files/compiler_8h#function-tiro_severity_str)**([tiro_severity_t](/docs/api/files/compiler_8h#typedef-tiro_severity_t) severity)<br>Returns the string representation of the given severity value.  |
| void | **[tiro_module_free](/docs/api/files/compiler_8h#function-tiro_module_free)**([tiro_module_t](/docs/api/files/def_8h#typedef-tiro_module_t) module)<br>Free a module.  |
| void | **[tiro_compiler_take_module](/docs/api/files/compiler_8h#function-tiro_compiler_take_module)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, [tiro_module_t](/docs/api/files/def_8h#typedef-tiro_module_t) * module, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Extracts the compiled module from the compiler and returns it.  |
| void | **[tiro_compiler_settings_init](/docs/api/files/compiler_8h#function-tiro_compiler_settings_init)**([tiro_compiler_settings_t](/docs/api/files/compiler_8h#typedef-tiro_compiler_settings_t) * settings)<br>Initializes the given compiler settings object with default values.  |
| void | **[tiro_compiler_run](/docs/api/files/compiler_8h#function-tiro_compiler_run)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Run the compiler on the set of source files provided via `tiro_compiler_add_file`.  |
| [tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) | **[tiro_compiler_new](/docs/api/files/compiler_8h#function-tiro_compiler_new)**(const [tiro_compiler_settings_t](/docs/api/files/compiler_8h#typedef-tiro_compiler_settings_t) * settings, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Allocates a new compiler instance.  |
| bool | **[tiro_compiler_has_module](/docs/api/files/compiler_8h#function-tiro_compiler_has_module)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler)<br>Returns true if this compiler has successfully compiled a set of source files and produced a bytecode module.  |
| void | **[tiro_compiler_free](/docs/api/files/compiler_8h#function-tiro_compiler_free)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler)<br>Destroys and frees the given compiler instance.  |
| void | **[tiro_compiler_dump_ir](/docs/api/files/compiler_8h#function-tiro_compiler_dump_ir)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, char ** string, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the string representation of the internal representation immediately before code generation.  |
| void | **[tiro_compiler_dump_cst](/docs/api/files/compiler_8h#function-tiro_compiler_dump_cst)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, char ** string, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the string representation of the concrete syntax tree (CST).  |
| void | **[tiro_compiler_dump_bytecode](/docs/api/files/compiler_8h#function-tiro_compiler_dump_bytecode)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, char ** string, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the string representation of the compiled bytecode module.  |
| void | **[tiro_compiler_dump_ast](/docs/api/files/compiler_8h#function-tiro_compiler_dump_ast)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, char ** string, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the string representation of the abstract syntax tree (AST).  |
| void | **[tiro_compiler_add_file](/docs/api/files/compiler_8h#function-tiro_compiler_add_file)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) compiler, const char * file_name, const char * file_content, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Add a source file to the compiler.  |

## Types Documentation

### typedef tiro_severity_t

```cpp
typedef enum tiro_severity tiro_severity_t;
```

Defines the possible values for the severity of diagnostic compiler messages. 

### enum tiro_severity

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TIRO_SEVERITY_WARNING | 1| A compiler warning.   |
| TIRO_SEVERITY_ERROR | 2| A compiler error (compilation fails)   |



Defines the possible values for the severity of diagnostic compiler messages. 

### typedef tiro_compiler_settings_t

```cpp
typedef struct tiro_compiler_settings tiro_compiler_settings_t;
```

An instance of this type can be passed to the compiler to configure it. 

Use tiro_compiler_settings_init to initialize this struct to default values. 



## Functions Documentation

### function tiro_severity_str

```cpp
const char * tiro_severity_str(
    tiro_severity_t severity
)
```

Returns the string representation of the given severity value. 

The returned string is allocated in static storage and MUST NOT be freed. 


### function tiro_module_free

```cpp
void tiro_module_free(
    tiro_module_t module
)
```

Free a module. 

Must be called exactly once for every created module.

Does nothing if `module` is NULL. 


### function tiro_compiler_take_module

```cpp
void tiro_compiler_take_module(
    tiro_compiler_t compiler,
    tiro_module_t * module,
    tiro_error_t * err
)
```

Extracts the compiled module from the compiler and returns it. 

On success, the module will be placed into the location specified by `module`, which must not be NULL. If a module was returned, it must be freed by calling `tiro_module_free`.

This function fails if `tiro_compiler_has_module` returns false. 


### function tiro_compiler_settings_init

```cpp
void tiro_compiler_settings_init(
    tiro_compiler_settings_t * settings
)
```

Initializes the given compiler settings object with default values. 

### function tiro_compiler_run

```cpp
void tiro_compiler_run(
    tiro_compiler_t compiler,
    tiro_error_t * err
)
```

Run the compiler on the set of source files provided via `tiro_compiler_add_file`. 

Requires at least once source file. This function can only be called once for every compiler instance.

Returns an error if the compilation fails. 


### function tiro_compiler_new

```cpp
tiro_compiler_t tiro_compiler_new(
    const tiro_compiler_settings_t * settings,
    tiro_error_t * err
)
```

Allocates a new compiler instance. 

**Parameters**: 

  * **settings** The compiler settings (optional). Default values will be used if this parameter is NULL.


A compiler can be used to compile a set of source files into a module. Warnings or errors emitted during compilation can be observed through the `settings->message_callback` function.


FIXME: Currently only works for a single source files, implement _add api. 


### function tiro_compiler_has_module

```cpp
bool tiro_compiler_has_module(
    tiro_compiler_t compiler
)
```

Returns true if this compiler has successfully compiled a set of source files and produced a bytecode module. 

In order for this function to return true, a previous call to `tiro_compiler_run` must have returned `TIRO_OK` and the compiler must have beeen configured to actually produce a module. 


### function tiro_compiler_free

```cpp
void tiro_compiler_free(
    tiro_compiler_t compiler
)
```

Destroys and frees the given compiler instance. 

Must be called exactly once for every instance created via `tiro_compiler_new` in order to avoid resource leaks. Does nothing if `compiler` is NULL. 


### function tiro_compiler_dump_ir

```cpp
void tiro_compiler_dump_ir(
    tiro_compiler_t compiler,
    char ** string,
    tiro_error_t * err
)
```

Returns the string representation of the internal representation immediately before code generation. 

Can only be called after `tiro_compiler_run` has been executed successfully.

Returns `TIRO_ERROR_BAD_STATE` if the compiler cannot produce the internal representation.

Otherwise, this function returns `TIRO_OK` and returns a new string using the provided output parameter. The string must be passed to `free` to release memory. 


### function tiro_compiler_dump_cst

```cpp
void tiro_compiler_dump_cst(
    tiro_compiler_t compiler,
    char ** string,
    tiro_error_t * err
)
```

Returns the string representation of the concrete syntax tree (CST). 

Can only be called after `tiro_compiler_run` has been executed. The compile process can have failed; a somewhat useful CST can often still be produced.

Returns `TIRO_ERROR_BAD_STATE` if the compiler cannot produce the CST.

Otherwise, this function returns `TIRO_OK` and returns a new string using the provided output parameter. The string must be passed to `free` to release memory. 


### function tiro_compiler_dump_bytecode

```cpp
void tiro_compiler_dump_bytecode(
    tiro_compiler_t compiler,
    char ** string,
    tiro_error_t * err
)
```

Returns the string representation of the compiled bytecode module. 

Can only be called after `tiro_compiler_run` has been executed successfully.

Returns `TIRO_ERROR_BAD_STATE` if the compiler cannot produce the disassembled output.

Otherwise, this function returns `TIRO_OK` and returns a new string using the provided output parameter. The string must be passed to `free` to release memory. 


### function tiro_compiler_dump_ast

```cpp
void tiro_compiler_dump_ast(
    tiro_compiler_t compiler,
    char ** string,
    tiro_error_t * err
)
```

Returns the string representation of the abstract syntax tree (AST). 

Can only be called after `tiro_compiler_run` has been executed. The compile process can have failed; a somewhat useful AST can often still be produced.

Returns `TIRO_ERROR_BAD_STATE` if the compiler cannot produce the AST.

Otherwise, this function returns `TIRO_OK` and returns a new string using the provided output parameter. The string must be passed to `free` to release memory. 


### function tiro_compiler_add_file

```cpp
void tiro_compiler_add_file(
    tiro_compiler_t compiler,
    const char * file_name,
    const char * file_content,
    tiro_error_t * err
)
```

Add a source file to the compiler. 

Can only be called before compilation started.

FIXME: Can only be called for a single source file as of now. 






-------------------------------

Updated on 11 April 2021 at 12:05:10 CEST
