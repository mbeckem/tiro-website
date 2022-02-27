---
title: tiro::compiler
summary: Translates a set of source files into a module. 

---

# tiro::compiler



Translates a set of source files into a module. 


`#include "tiropp/compiler.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**(std::string&#95;view module_name)<br>Constructs a new compiler instance for a module with the given name.  |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**(std::string&#95;view module_name, [compiler&#95;settings](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;settings) settings)<br>Constructs a new compiler instance for a module with the given name and the given settings.  |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**([tiro&#95;compiler&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-compiler-t) raw_compiler) |
| void | **[add_file](/docs/api/classes/classtiro_1_1compiler#function-add-file)**(std::string&#95;view file_name, std::string&#95;view file_content)<br>Add a source file to the compiler's source set.  |
| void | **[run](/docs/api/classes/classtiro_1_1compiler#function-run)**()<br>Run the compiler on the set of source files provided via `add_file`.  |
| bool | **[has_module](/docs/api/classes/classtiro_1_1compiler#function-has-module)**() const<br>Returns true if the compiler has successfully compiled a bytecode module.  |
| [compiled_module](/docs/api/classes/classtiro_1_1compiled__module) | **[take_module](/docs/api/classes/classtiro_1_1compiler#function-take-module)**()<br>Extracts the compiled module from the compiler and returns it.  |
| std::string | **[dump_cst](/docs/api/classes/classtiro_1_1compiler#function-dump-cst)**() const<br>Returns a dump of the compiler's concrete syntax tree.  |
| std::string | **[dump_ast](/docs/api/classes/classtiro_1_1compiler#function-dump-ast)**() const<br>Returns a dump of the compiler's abstract syntax tree.  |
| std::string | **[dump_ir](/docs/api/classes/classtiro_1_1compiler#function-dump-ir)**() const<br>Returns a dump of the compiler's internal representation.  |
| std::string | **[dump_bytecode](/docs/api/classes/classtiro_1_1compiler#function-dump-bytecode)**() const<br>Returns a dump of the disassembled bytecode.  |
| [tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro-compiler-t) | **[raw_compiler](/docs/api/classes/classtiro_1_1compiler#function-raw-compiler)**() const |

## Public Functions Documentation

### function compiler

```cpp
inline explicit compiler(
    std::string_view module_name
)
```

Constructs a new compiler instance for a module with the given name. 

### function compiler

```cpp
inline explicit compiler(
    std::string_view module_name,
    compiler_settings settings
)
```

Constructs a new compiler instance for a module with the given name and the given settings. 

### function compiler

```cpp
inline explicit compiler(
    tiro_compiler_t raw_compiler
)
```


### function add_file

```cpp
inline void add_file(
    std::string_view file_name,
    std::string_view file_content
)
```

Add a source file to the compiler's source set. 

Can only be called before compilation started.

`file_name` should be unique in the current source set. 


### function run

```cpp
inline void run()
```

Run the compiler on the set of source files provided via `add_file`. 

Requires at least one source file. This function can only be called once for every compiler instance. 


### function has_module

```cpp
inline bool has_module() const
```

Returns true if the compiler has successfully compiled a bytecode module. 

### function take_module

```cpp
inline compiled_module take_module()
```

Extracts the compiled module from the compiler and returns it. 

For this to work, [run()](/docs/api/classes/classtiro_1_1compiler#function-run) must have completed successfully. 


### function dump_cst

```cpp
inline std::string dump_cst() const
```

Returns a dump of the compiler's concrete syntax tree. 

Can only be called after a call to [run()](/docs/api/classes/classtiro_1_1compiler#function-run), and only if the `enable_dump_cst` option was set to true. 


### function dump_ast

```cpp
inline std::string dump_ast() const
```

Returns a dump of the compiler's abstract syntax tree. 

Can only be called after a call to [run()](/docs/api/classes/classtiro_1_1compiler#function-run), and only if the `enable_dump_ast` option was set to true. 


### function dump_ir

```cpp
inline std::string dump_ir() const
```

Returns a dump of the compiler's internal representation. 

Can only be called after a call to [run()](/docs/api/classes/classtiro_1_1compiler#function-run), and only if the `enable_dump_ir` option was set to true. 


### function dump_bytecode

```cpp
inline std::string dump_bytecode() const
```

Returns a dump of the disassembled bytecode. 

Can only be called after a call to [run()](/docs/api/classes/classtiro_1_1compiler#function-run), and only if the `enable_bytecode` option was set to true. 


### function raw_compiler

```cpp
inline tiro_compiler_t raw_compiler() const
```


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100