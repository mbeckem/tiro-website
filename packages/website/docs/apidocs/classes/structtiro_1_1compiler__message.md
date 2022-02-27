---
title: tiro::compiler_message
summary: Represents a diagnostic message emitted by the compiler. 

---

# tiro::compiler_message



Represents a diagnostic message emitted by the compiler.  [More...](#detailed-description)


`#include "tiropp/compiler.hpp"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro::severity](/docs/api/namespaces/namespacetiro#enum-severity) | **[severity](/docs/api/classes/structtiro_1_1compiler__message#variable-severity)** <br>The severity of this message.  |
| std::string&#95;view | **[file](/docs/api/classes/structtiro_1_1compiler__message#variable-file)** <br>The relevant source file. May be empty if there is no source file associated with this message.  |
| uint32&#95;t | **[line](/docs/api/classes/structtiro_1_1compiler__message#variable-line)** <br>Source line (1 based). Zero if unavailable.  |
| uint32&#95;t | **[column](/docs/api/classes/structtiro_1_1compiler__message#variable-column)** <br>Source column (1 based). Zero if unavailable.  |
| std::string&#95;view | **[text](/docs/api/classes/structtiro_1_1compiler__message#variable-text)** <br>The message text.  |

## Detailed Description

```cpp
struct tiro::compiler_message;
```

Represents a diagnostic message emitted by the compiler. 

All fields are only valid for the duration of the `message_callback` function call. 

## Public Attributes Documentation

### variable severity

```cpp
tiro::severity severity = severity::error;
```

The severity of this message. 

### variable file

```cpp
std::string_view file;
```

The relevant source file. May be empty if there is no source file associated with this message. 

### variable line

```cpp
uint32_t line = 0;
```

Source line (1 based). Zero if unavailable. 

### variable column

```cpp
uint32_t column = 0;
```

Source column (1 based). Zero if unavailable. 

### variable text

```cpp
std::string_view text;
```

The message text. 

-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100