---
title: tiro::compiler_message

---

# tiro::compiler_message






`#include "tiropp/compiler.hpp"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro::severity](/docs/api/namespaces/namespacetiro#enum-severity) | **[severity](/docs/api/classes/structtiro_1_1compiler__message#variable-severity)**  |
| std::string&#95;view | **[file](/docs/api/classes/structtiro_1_1compiler__message#variable-file)**  |
| uint32&#95;t | **[line](/docs/api/classes/structtiro_1_1compiler__message#variable-line)**  |
| uint32&#95;t | **[column](/docs/api/classes/structtiro_1_1compiler__message#variable-column)**  |
| std::string&#95;view | **[text](/docs/api/classes/structtiro_1_1compiler__message#variable-text)**  |

## Public Attributes Documentation

### variable severity

```cpp
tiro::severity severity = severity::error;
```


### variable file

```cpp
std::string_view file;
```


### variable line

```cpp
uint32_t line = 0;
```


### variable column

```cpp
uint32_t column = 0;
```


### variable text

```cpp
std::string_view text;
```


-------------------------------

Updated on 2021-10-02 at 17:24:37 +0200