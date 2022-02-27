---
title: tiro::compiler_settings
summary: An instance of this type can be passed to the compiler to configure it. 

---

# tiro::compiler_settings



An instance of this type can be passed to the compiler to configure it.  [More...](#detailed-description)


`#include "tiropp/compiler.hpp"`

## Public Types

|                | Name           |
| -------------- | -------------- |
| using std::function&lt; void(const [compiler&#95;message](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;message) &[message](/docs/api/namespaces/namespacetiro#function-message))&gt; | **[message_callback_type](/docs/api/classes/structtiro_1_1compiler__settings#using-message-callback-type)**  |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| bool | **[enable_dump_cst](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-cst)** <br>Enables the compiler's dump_cst() method.  |
| bool | **[enable_dump_ast](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-ast)** <br>Enables the compiler's dump_ast() method.  |
| bool | **[enable_dump_ir](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-ir)** <br>Enables the compiler's dump_ir() method.  |
| bool | **[enable_dump_bytecode](/docs/api/classes/structtiro_1_1compiler__settings#variable-enable-dump-bytecode)** <br>Enables the compiler's dump_bytecode() method.  |
| [message&#95;callback&#95;type](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;settings#using-message-callback-type) | **[message_callback](/docs/api/classes/structtiro_1_1compiler__settings#variable-message-callback)** <br>Callback for diagnostic messages (may be empty).  |

## Detailed Description

```cpp
struct tiro::compiler_settings;
```

An instance of this type can be passed to the compiler to configure it. 

The default constructor fills an instance with default values. 

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

Enables the compiler's dump_cst() method. 

### variable enable_dump_ast

```cpp
bool enable_dump_ast = false;
```

Enables the compiler's dump_ast() method. 

### variable enable_dump_ir

```cpp
bool enable_dump_ir = false;
```

Enables the compiler's dump_ir() method. 

### variable enable_dump_bytecode

```cpp
bool enable_dump_bytecode = false;
```

Enables the compiler's dump_bytecode() method. 

### variable message_callback

```cpp
message_callback_type message_callback;
```

Callback for diagnostic messages (may be empty). 

The compiler will print to the process output stream if this is not set. 


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100