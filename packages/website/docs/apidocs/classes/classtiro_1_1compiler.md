---
title: tiro::compiler

---

# tiro::compiler






`#include "tiropp/compiler.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| [compiled_module](/docs/api/classes/classtiro_1_1compiled__module) | **[take_module](/docs/api/classes/classtiro_1_1compiler#function-take_module)**() |
| const [compiler_settings](/docs/api/classes/structtiro_1_1compiler__settings) & | **[settings](/docs/api/classes/classtiro_1_1compiler#function-settings)**() const |
| void | **[run](/docs/api/classes/classtiro_1_1compiler#function-run)**() |
| [tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) | **[raw_compiler](/docs/api/classes/classtiro_1_1compiler#function-raw_compiler)**() const |
| bool | **[has_module](/docs/api/classes/classtiro_1_1compiler#function-has_module)**() const |
| std::string | **[dump_ir](/docs/api/classes/classtiro_1_1compiler#function-dump_ir)**() const |
| std::string | **[dump_cst](/docs/api/classes/classtiro_1_1compiler#function-dump_cst)**() const |
| std::string | **[dump_bytecode](/docs/api/classes/classtiro_1_1compiler#function-dump_bytecode)**() const |
| std::string | **[dump_ast](/docs/api/classes/classtiro_1_1compiler#function-dump_ast)**() const |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**() |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**([compiler_settings](/docs/api/classes/structtiro_1_1compiler__settings) settings) |
| | **[compiler](/docs/api/classes/classtiro_1_1compiler#function-compiler)**([tiro_compiler_t](/docs/api/files/def_8h#typedef-tiro_compiler_t) raw_compiler) |
| void | **[add_file](/docs/api/classes/classtiro_1_1compiler#function-add_file)**(const char * file_name, const char * file_content) |

## Public Functions Documentation

### function take_module

```cpp
inline compiled_module take_module()
```


### function settings

```cpp
inline const compiler_settings & settings() const
```


### function run

```cpp
inline void run()
```


### function raw_compiler

```cpp
inline tiro_compiler_t raw_compiler() const
```


### function has_module

```cpp
inline bool has_module() const
```


### function dump_ir

```cpp
inline std::string dump_ir() const
```


### function dump_cst

```cpp
inline std::string dump_cst() const
```


### function dump_bytecode

```cpp
inline std::string dump_bytecode() const
```


### function dump_ast

```cpp
inline std::string dump_ast() const
```


### function compiler

```cpp
inline compiler()
```


### function compiler

```cpp
inline explicit compiler(
    compiler_settings settings
)
```


### function compiler

```cpp
inline explicit compiler(
    tiro_compiler_t raw_compiler
)
```


### function add_file

```cpp
inline void add_file(
    const char * file_name,
    const char * file_content
)
```


-------------------------------

Updated on 24 July 2021 at 14:32:19 CEST