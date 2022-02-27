---
title: tiro::compiler::state_t

---

# tiro::compiler::state_t





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[state_t](/docs/api/classes/structtiro_1_1compiler_1_1state__t#function-state-t)**([compiler&#95;settings](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;settings) && settings_) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [compiler&#95;settings](/docs/api/classes/structtiro&#95;1&#95;1compiler&#95;&#95;settings) | **[settings](/docs/api/classes/structtiro_1_1compiler_1_1state__t#variable-settings)**  |
| std::exception&#95;ptr | **[stored_exception](/docs/api/classes/structtiro_1_1compiler_1_1state__t#variable-stored-exception)**  |

## Public Functions Documentation

### function state_t

```cpp
inline state_t(
    compiler_settings && settings_
)
```


## Public Attributes Documentation

### variable settings

```cpp
compiler_settings settings;
```


### variable stored_exception

```cpp
std::exception_ptr stored_exception;
```


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100