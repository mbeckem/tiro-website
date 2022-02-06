---
title: tiro_resumable_frame_desc
summary: Represents construction parameters for a resumable function. 

---

# tiro_resumable_frame_desc



Represents construction parameters for a resumable function. 


`#include "tiro/functions.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) | **[name](/docs/api/classes/structtiro__resumable__frame__desc#variable-name)** <br>The function name.  |
| size&#95;t | **[arg_count](/docs/api/classes/structtiro__resumable__frame__desc#variable-arg-count)** <br>The number of function parameters (0 by default).  |
| size&#95;t | **[local_count](/docs/api/classes/structtiro__resumable__frame__desc#variable-local-count)** <br>The number of locals usable by a function frame.  |
| [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) | **[closure](/docs/api/classes/structtiro__resumable__frame__desc#variable-closure)** <br>An arbitrary value (may be NULL) that will be passed to the function (via the frame) on each invocation.  |
| [tiro&#95;resumable&#95;function&#95;t](/docs/api/files/functions&#95;8h#typedef-tiro-resumable-function-t) | **[func](/docs/api/classes/structtiro__resumable__frame__desc#variable-func)** <br>The native function pointer that implements the resumable function.  |

## Public Attributes Documentation

### variable name

```cpp
tiro_handle_t name;
```

The function name. 

Must be set to a valid string. 


### variable arg_count

```cpp
size_t arg_count;
```

The number of function parameters (0 by default). 

The maximum number of function arguments is limited to a reasonable amount (currently `1024`). 


### variable local_count

```cpp
size_t local_count;
```

The number of locals usable by a function frame. 

The maximum number of function locals is limited to a reasonable amount (currently `2 ** 14`). 


### variable closure

```cpp
tiro_handle_t closure;
```

An arbitrary value (may be NULL) that will be passed to the function (via the frame) on each invocation. 

The value is shared by all call frames created for this function. 


### variable func

```cpp
tiro_resumable_function_t func;
```

The native function pointer that implements the resumable function. 

-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100