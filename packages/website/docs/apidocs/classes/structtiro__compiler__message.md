---
title: tiro_compiler_message
summary: Represents a diagnostic message emitted by the compiler. 

---

# tiro_compiler_message



Represents a diagnostic message emitted by the compiler.  [More...](#detailed-description)


`#include "tiro/compiler.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro&#95;severity&#95;t](/docs/api/files/compiler&#95;8h#typedef-tiro-severity-t) | **[severity](/docs/api/classes/structtiro__compiler__message#variable-severity)** <br>The severity of this message.  |
| [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) | **[file](/docs/api/classes/structtiro__compiler__message#variable-file)** <br>The relevant source file.  |
| uint32&#95;t | **[line](/docs/api/classes/structtiro__compiler__message#variable-line)** <br>Source line (1 based).  |
| uint32&#95;t | **[column](/docs/api/classes/structtiro__compiler__message#variable-column)** <br>Source column (1 based).  |
| [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) | **[text](/docs/api/classes/structtiro__compiler__message#variable-text)** <br>The message text.  |

## Detailed Description

```cpp
struct tiro_compiler_message;
```

Represents a diagnostic message emitted by the compiler. 

All fields are only valid for the duration of the `message_callback` function call. 

## Public Attributes Documentation

### variable severity

```cpp
tiro_severity_t severity;
```

The severity of this message. 

### variable file

```cpp
tiro_string_t file;
```

The relevant source file. 

May be empty if there is no source file associated with this message. 


### variable line

```cpp
uint32_t line;
```

Source line (1 based). 

Zero if unavailable. 


### variable column

```cpp
uint32_t column;
```

Source column (1 based). 

Zero if unavailable. 


### variable text

```cpp
tiro_string_t text;
```

The message text. 

-------------------------------

Updated on 2022-01-01 at 12:38:39 +0100