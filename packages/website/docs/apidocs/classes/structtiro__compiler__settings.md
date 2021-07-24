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
| void * | **[message_callback_data](/docs/api/classes/structtiro__compiler__settings#variable-message_callback_data)**  |
| void(* | **[message_callback](/docs/api/classes/structtiro__compiler__settings#variable-message_callback)**  |
| bool | **[enable_dump_ir](/docs/api/classes/structtiro__compiler__settings#variable-enable_dump_ir)**  |
| bool | **[enable_dump_cst](/docs/api/classes/structtiro__compiler__settings#variable-enable_dump_cst)**  |
| bool | **[enable_dump_bytecode](/docs/api/classes/structtiro__compiler__settings#variable-enable_dump_bytecode)**  |
| bool | **[enable_dump_ast](/docs/api/classes/structtiro__compiler__settings#variable-enable_dump_ast)**  |

## Detailed Description

```cpp
struct tiro_compiler_settings;
```

An instance of this type can be passed to the compiler to configure it. 

Use tiro_compiler_settings_init to initialize this struct to default values. 

## Public Attributes Documentation

### variable message_callback_data

```cpp
void * message_callback_data;
```


### variable message_callback

```cpp
void(* message_callback;
```


### variable enable_dump_ir

```cpp
bool enable_dump_ir;
```


### variable enable_dump_cst

```cpp
bool enable_dump_cst;
```


### variable enable_dump_bytecode

```cpp
bool enable_dump_bytecode;
```


### variable enable_dump_ast

```cpp
bool enable_dump_ast;
```


-------------------------------

Updated on 24 July 2021 at 15:38:22 CEST