---
title: tiro::compiler_settings

---

# tiro::compiler_settings






`#include "tiropp/compiler.hpp"`

## Public Types

|                | Name           |
| -------------- | -------------- |
| using std::function&lt; void(const [compiler&#95;message](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;message) &[message](/docs/api/namespaces/namespacetiro#function-message))&gt; | **[message_callback_type](/docs/api/classes/structtiro_1_1compiler__settings#using-message-callback-type)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[enable_dump_cst](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-cst)**  |
| bool | **[enable_dump_ast](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-ast)**  |
| bool | **[enable_dump_ir](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-ir)**  |
| bool | **[enable_dump_bytecode](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-bytecode)**  |
| [message&#95;callback&#95;type](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;settings#using-message-callback-type) | **[message_callback](/docs/api/classes/structtiro_1_1compiler__settings#variable-message-callback)**  |

## Public Types Documentation

### using message_callback_type

```cpp
using message_callback_type =  std::function<void(const compiler_message& message)>;
```


## Public Attributes Documentation

### variable enable_dump_cst

```cpp
bool enable_dump_cst = false;
```


### variable enable_dump_ast

```cpp
bool enable_dump_ast = false;
```


### variable enable_dump_ir

```cpp
bool enable_dump_ir = false;
```


### variable enable_dump_bytecode

```cpp
bool enable_dump_bytecode = false;
```


### variable message_callback

```cpp
message_callback_type message_callback;
```


-------------------------------

Updated on 2021-10-02 at 17:24:37 +0200