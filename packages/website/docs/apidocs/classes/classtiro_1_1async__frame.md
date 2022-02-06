---
title: tiro::async_frame
summary: Represents the call frame of a asynchronous function call. 

---

# tiro::async_frame



Represents the call frame of a asynchronous function call.  [More...](#detailed-description)


`#include "tiropp/functions.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) raw_frame) |
| | **[async_frame](/docs/api/classes/classtiro_1_1async__frame#function-async-frame)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =delete |
| [async_frame](/docs/api/classes/classtiro_1_1async__frame) & | **[operator=](/docs/api/classes/classtiro_1_1async__frame#function-operator=)**([async&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;frame) && ) =delete |
| size_t | **[arg_count](/docs/api/classes/classtiro_1_1async__frame#function-arg-count)**() const<br>Returns the number of arguments passed to this function call.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1async__frame#function-arg)**(size&#95;t index) const<br>Returns the argument at the given index (`0 <= index < argc`).  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1async__frame#function-closure)**() const<br>Returns the closure value referenced by this function (if any).  |
| void | **[return_value](/docs/api/classes/classtiro_1_1async__frame#function-return-value)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Sets the return value for this function call frame to the given `value`.  |
| void | **[panic_msg](/docs/api/classes/classtiro_1_1async__frame#function-panic-msg)**(std::string&#95;view message)<br>Signals a panic from this function call frame using the given message.  |
| [async_token](/docs/api/classes/classtiro_1_1async__token) | **[token](/docs/api/classes/classtiro_1_1async__frame#function-token)**() const<br>Returns a token for resuming an async function call after yielding.  |
| void | **[yield](/docs/api/classes/classtiro_1_1async__frame#function-yield)**()<br>Yields from an async function call, pausing the current coroutine until it is resumed via an async frame token.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1async__frame#function-raw-vm)**() const |
| [tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro-async-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1async__frame#function-raw-frame)**() const |

## Detailed Description

```cpp
class tiro::async_frame;
```

Represents the call frame of a asynchronous function call. 

References to sync_frames are only valid from within the surrounding function call. 

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
) =delete
```


### function operator=

```cpp
async_frame & operator=(
    async_frame && 
) =delete
```


### function arg_count

```cpp
inline size_t arg_count() const
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

Sets the return value for this function call frame to the given `value`. 

This function can be used to signal an immediate return without yielding. 


### function panic_msg

```cpp
inline void panic_msg(
    std::string_view message
)
```

Signals a panic from this function call frame using the given message. 

This function can be used to signal an immediate panic without yielding. 


### function token

```cpp
inline async_token token() const
```

Returns a token for resuming an async function call after yielding. 

Yielding from an async function call must be implemented by



1. acquiring an async token and storing it somewhere
2. scheduling some asynchronous operation
3. calling `[yield()](/docs/api/classes/classtiro_1_1async__frame#function-yield)` on this frame and returning from the native function call
After the async operation has completed, the coroutine may be resumed by calling `token.return_value` or `token.panic_msg` to provide a function result. 


### function yield

```cpp
inline void yield()
```

Yields from an async function call, pausing the current coroutine until it is resumed via an async frame token. 

The native function should return immediately after calling this function. 


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_async_frame_t raw_frame() const
```


-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100