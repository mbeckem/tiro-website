---
title: tiro::resumable_frame
summary: Represents the call frame of a resumable function call. 

---

# tiro::resumable_frame



Represents the call frame of a resumable function call.  [More...](#detailed-description)


`#include "tiropp/functions.hpp"`

## Public Types

|                | Name           |
| -------------- | -------------- |
| enum int | **[frame_state](/docs/api/classes/classtiro_1_1resumable__frame#enum-frame-state)** { start = TIRO_RESUMABLE_STATE_START, end = TIRO_RESUMABLE_STATE_END}<br>Lists well known state values used by resumable functions.  |

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[resumable_frame](/docs/api/classes/classtiro_1_1resumable__frame#function-resumable-frame)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) raw_frame) |
| | **[resumable_frame](/docs/api/classes/classtiro_1_1resumable__frame#function-resumable-frame)**(const [resumable&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1resumable&#95;&#95;frame) & ) =delete |
| [resumable_frame](/docs/api/classes/classtiro_1_1resumable__frame) & | **[operator=](/docs/api/classes/classtiro_1_1resumable__frame#function-operator=)**(const [resumable&#95;frame](/docs/api/classes/classtiro&#95;1&#95;1resumable&#95;&#95;frame) & ) =delete |
| size_t | **[arg_count](/docs/api/classes/classtiro_1_1resumable__frame#function-arg-count)**() const<br>Returns the number of arguments passed to this function call.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[arg](/docs/api/classes/classtiro_1_1resumable__frame#function-arg)**(size&#95;t index) const<br>Returns the argument at the given index (`0 <= index < argc`).  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[closure](/docs/api/classes/classtiro_1_1resumable__frame#function-closure)**() const<br>Returns the closure value referenced by this function (if any).  |
| size_t | **[local_count](/docs/api/classes/classtiro_1_1resumable__frame#function-local-count)**() const<br>Returns the number of local values available to the function frame.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[local](/docs/api/classes/classtiro_1_1resumable__frame#function-local)**(size&#95;t index) const<br>Returns the current value of the local slot with the given index.  |
| void | **[set_local](/docs/api/classes/classtiro_1_1resumable__frame#function-set-local)**(size&#95;t index, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Sets the current value of the local slot with the given index to `value`.  |
| int | **[state](/docs/api/classes/classtiro_1_1resumable__frame#function-state)**() const<br>Returns the current state of this frame.  |
| void | **[set_state](/docs/api/classes/classtiro_1_1resumable__frame#function-set-state)**(int next_state)<br>Sets the current state of this frame.  |
| void | **[invoke](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)**(int next_state, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func, const [tuple](/docs/api/classes/classtiro&#95;1&#95;1tuple) & args)<br>Signals the vm that the function `func` shall be invoked with the given arguments in `args`.  |
| void | **[invoke](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)**(int next_state, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func)<br>Like above, but calls the given function without any arguments.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[invoke_return](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke-return)**() const<br>Returns the result of the last function call made via `[invoke()](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)`.  |
| void | **[return_value](/docs/api/classes/classtiro_1_1resumable__frame#function-return-value)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[panic_msg](/docs/api/classes/classtiro_1_1resumable__frame#function-panic-msg)**(std::string&#95;view message)<br>Signals a panic from the given function call frame.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1resumable__frame#function-raw-vm)**() const |
| [tiro_resumable_frame_t](/docs/api/files/def_8h#typedef-tiro-resumable-frame-t) | **[raw_frame](/docs/api/classes/classtiro_1_1resumable__frame#function-raw-frame)**() const |

## Detailed Description

```cpp
class tiro::resumable_frame;
```

Represents the call frame of a resumable function call. 

References to an instance of this class are only valid from within the native function implementing the resumable function call. 

## Public Types Documentation

### enum frame_state

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| start | TIRO_RESUMABLE_STATE_START| The initial state value.   |
| end | TIRO_RESUMABLE_STATE_END| Signals that the function has finished executing.   |



Lists well known state values used by resumable functions. 

All positive integers can be used freely by the application. 


## Public Functions Documentation

### function resumable_frame

```cpp
inline resumable_frame(
    tiro_vm_t raw_vm,
    tiro_resumable_frame_t raw_frame
)
```


### function resumable_frame

```cpp
resumable_frame(
    const resumable_frame & 
) =delete
```


### function operator=

```cpp
resumable_frame & operator=(
    const resumable_frame & 
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

### function local_count

```cpp
inline size_t local_count() const
```

Returns the number of local values available to the function frame. 

### function local

```cpp
inline handle local(
    size_t index
) const
```

Returns the current value of the local slot with the given index. 

### function set_local

```cpp
inline void set_local(
    size_t index,
    const handle & value
)
```

Sets the current value of the local slot with the given index to `value`. 

### function state

```cpp
inline int state() const
```

Returns the current state of this frame. 

### function set_state

```cpp
inline void set_state(
    int next_state
)
```

Sets the current state of this frame. 

**Parameters**: 

  * **next_state** The new state value 


It is usually not necessary to invoke this function directly as changing the state is also implied by other methods like `[invoke()](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)` and `[return_value()](/docs/api/classes/classtiro_1_1resumable__frame#function-return-value)`.

The calling native function should return after altering the state. The new state will be active when the native function is called for the next time.

Note that a few states have special meaning (see `resumable_frame_state`).


### function invoke

```cpp
inline void invoke(
    int next_state,
    const function & func,
    const tuple & args
)
```

Signals the vm that the function `func` shall be invoked with the given arguments in `args`. 

**Parameters**: 

  * **next_state** The new state value 
  * **func** The target function to invoke 
  * **args** The call arguments 


`func` will be invoked after the native function returned to the vm. The current native function will be called again when `func` has itself returned, and its return value will be accessible via `[invoke_return()](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke-return)`.

Calling this function implies a state change to `next_state`, which will be the frame's state when the native function is called again after `func`'s execution.


### function invoke

```cpp
inline void invoke(
    int next_state,
    const function & func
)
```

Like above, but calls the given function without any arguments. 

### function invoke_return

```cpp
inline handle invoke_return() const
```

Returns the result of the last function call made via `[invoke()](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)`. 

Only returns a useful value when the native function is called again for the first time after calling `[invoke()](/docs/api/classes/classtiro_1_1resumable__frame#function-invoke)` and returning to the vm. 


### function return_value

```cpp
inline void return_value(
    const handle & value
)
```

Sets the return value for the given function call frame to the given `value`. 

The call frame's state is also set to `END` as a result of this call. 


### function panic_msg

```cpp
inline void panic_msg(
    std::string_view message
)
```

Signals a panic from the given function call frame. 

The call frame's state is also set to `END` as a result of this call.

TODO: Allow user defined exception objects instead of plain string? 


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_frame

```cpp
inline tiro_resumable_frame_t raw_frame() const
```


-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100