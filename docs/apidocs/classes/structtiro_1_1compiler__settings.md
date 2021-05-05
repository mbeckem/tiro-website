---
title: tiro::compiler_settings

---

# tiro::compiler_settings




`#include "tiropp/compiler.hpp"`

## Public Types

|                | Name           |
| -------------- | -------------- |
| using std::function< void([severity](/docs/api/namespaces/namespacetiro#enum-severity) sev, uint32_t line, uint32_t column, const char *[message](/docs/api/namespaces/namespacetiro#function-message))> | **[message_callback_type](/docs/api/classes/structtiro_1_1compiler__settings#using-message_callback_type)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [message_callback_type](/docs/api/classes/structtiro_1_1compiler__settings#using-message_callback_type) | **[message_callback](/docs/api/classes/structtiro_1_1compiler__settings#variable-message_callback)**  |
| bool | **[enable_dump_ir](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable_dump_ir)**  |
| bool | **[enable_dump_cst](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable_dump_cst)**  |
| bool | **[enable_dump_bytecode](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable_dump_bytecode)**  |
| bool | **[enable_dump_ast](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable_dump_ast)**  |

## Public Types Documentation

### using message_callback_type

```cpp
using message_callback_type =  std::function<void(severity sev, uint32_t line, uint32_t column, const char* message)>;
```


## Public Attributes Documentation

### variable message_callback

```cpp
message_callback_type message_callback;
```


### variable enable_dump_ir

```cpp
bool enable_dump_ir = false;
```


### variable enable_dump_cst

```cpp
bool enable_dump_cst = false;
```


### variable enable_dump_bytecode

```cpp
bool enable_dump_bytecode = false;
```


### variable enable_dump_ast

```cpp
bool enable_dump_ast = false;
```


-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST