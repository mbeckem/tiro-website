---
title: tiro_compiler_settings
summary: An instance of this type can be passed to the compiler to configure it. 

---

# tiro_compiler_settings



An instance of this type can be passed to the compiler to configure it.  [More...](#detailed-description)


`#include "tiro/compiler.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[enable_dump_cst](/docs/api/classes/structtiro__compiler__settings#variable-enable-dump-cst)**  |
| bool | **[enable_dump_ast](/docs/api/classes/structtiro__compiler__settings#variable-enable-dump-ast)**  |
| bool | **[enable_dump_ir](/docs/api/classes/structtiro__compiler__settings#variable-enable-dump-ir)**  |
| bool | **[enable_dump_bytecode](/docs/api/classes/structtiro__compiler__settings#variable-enable-dump-bytecode)**  |
| void &#42; | **[message_callback_data](/docs/api/classes/structtiro__compiler__settings#variable-message-callback-data)**  |
| void(&#42;)(const tiro&#95;compiler&#95;message&#95;t &#42;message, void &#42;userdata) | **[message_callback](/docs/api/classes/structtiro__compiler__settings#variable-message-callback)**  |

## Detailed Description

```cpp
struct tiro_compiler_settings;
```

An instance of this type can be passed to the compiler to configure it. 

Use tiro_compiler_settings_init to initialize this struct to default values. 

## Public Attributes Documentation

### variable enable_dump_cst

```cpp
bool enable_dump_cst;
```


### variable enable_dump_ast

```cpp
bool enable_dump_ast;
```


### variable enable_dump_ir

```cpp
bool enable_dump_ir;
```


### variable enable_dump_bytecode

```cpp
bool enable_dump_bytecode;
```


### variable message_callback_data

```cpp
void * message_callback_data;
```


### variable message_callback

```cpp
void(*)(const tiro_compiler_message_t *message, void *userdata) message_callback;
```


-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200