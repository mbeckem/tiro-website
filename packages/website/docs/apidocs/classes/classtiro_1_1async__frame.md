---
title: tiro::async_frame
summary: Represents the call frame of a asynchronous function call. 

---

# tiro::async_frame



Represents the call frame of a asynchronous function call.  [More...](#detailed-description)


`#include "tiropp/objects.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) raw_frame) |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =default |
| [async_frame](/docs/api/classes/classtiro_1_1async__frame) & | **[operator=](/docs/api/classes/classtiro_1_1async__frame#function-operator=)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =default |
| size_t | **[argc](/docs/api/classes/classtiro_1_1async__frame#function-argc)**() const<br>Returns the number of arguments passed to this function call.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1async__frame#function-arg)**(size&#95;t index) const<br>Returns the argument at the given index (`0 <= index < argc`).  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1async__frame#function-closure)**() const<br>Returns the closure value referenced by this function (if any).  |
| void | **[return_value](/docs/api/classes/classtiro_1_1async__frame#function-return-value)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Sets the return value for the given function call frame to the given `value`.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1async__frame#function-raw-vm)**() const |
| [tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro-async-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1async__frame#function-raw-frame)**() const |

## Detailed Description

```cpp
class tiro::async_frame;
```

Represents the call frame of a asynchronous function call. 

The lifetime of async_frames is dynamic. They usually outlive their surrounding native function call, which causes the calling tiro coroutine to sleep. The coroutine resumes when the frame's return value has been set.

Frames must not outlive their associated vm. 

## Public Functions Documentation

### function async_frame

```cpp
inline async_frame(
    tiro_vm_t raw_vm,
    tiro_async_frame_t raw_frame
)
```


### function async_frame

```cpp
async_frame(
    async_frame && 
) =default
```


### function operator=

```cpp
async_frame & operator=(
    async_frame && 
) =default
```


### function argc

```cpp
inline size_t argc() const
```

Returns the number of arguments passed to this function call. 

### function arg

```cpp
inline handle arg(
    size_t index
) const
```

Returns the argument at the given index (`0 <= index < argc`). 

### function closure

```cpp
inline handle closure() const
```

Returns the closure value referenced by this function (if any). 

### function return_value

```cpp
inline void return_value(
    const handle & value
)
```

Sets the return value for the given function call frame to the given `value`. 

### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_async_frame_t raw_frame() const
```


-------------------------------

Updated on 2022-01-01 at 12:38:39 +0100