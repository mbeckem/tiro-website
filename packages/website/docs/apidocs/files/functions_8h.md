---
title: tiro/functions.h
summary: Functions and type definitions for creating native functions that are callable from tiro. 

---

# tiro/functions.h

Functions and type definitions for creating native functions that are callable from tiro. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro_resumable_frame_desc](/docs/api/classes/structtiro__resumable__frame__desc)** <br>Represents construction parameters for a resumable function.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[tiro_resumable_state](/docs/api/files/functions_8h#enum-tiro-resumable-state)** { TIRO_RESUMABLE_STATE_START = 0, TIRO_RESUMABLE_STATE_END = -1}<br>Lists well known state values used by resumable functions.  |
| typedef void(&#42;)(tiro&#95;vm&#95;t vm, tiro&#95;sync&#95;frame&#95;t frame) | **[tiro_sync_function_t](/docs/api/files/functions_8h#typedef-tiro-sync-function-t)** <br>The prototype of a native function callback that provides a synchronous tiro function.  |
| typedef void(&#42;)(tiro&#95;vm&#95;t vm, tiro&#95;async&#95;frame&#95;t frame) | **[tiro_async_function_t](/docs/api/files/functions_8h#typedef-tiro-async-function-t)** <br>The prototype of a native function callback that provides an asynchronous tiro function.  |
| typedef void(&#42;)(tiro&#95;vm&#95;t vm, tiro&#95;resumable&#95;frame&#95;t frame) | **[tiro_resumable_function_t](/docs/api/files/functions_8h#typedef-tiro-resumable-function-t)** <br>The prototype of a native function that implements a resumable function.  |
| typedef enum [tiro&#95;resumable&#95;state](/docs/api/files/functions&#95;8h#enum-tiro-resumable-state) | **[tiro_resumable_state_t](/docs/api/files/functions_8h#typedef-tiro-resumable-state-t)** <br>Lists well known state values used by resumable functions.  |
| typedef struct [tiro&#95;resumable&#95;frame&#95;desc](/docs/api/classes/structtiro&#95;&#95;resumable&#95;&#95;frame&#95;&#95;desc) | **[tiro_resumable_frame_desc_t](/docs/api/files/functions_8h#typedef-tiro-resumable-frame-desc-t)** <br>Represents construction parameters for a resumable function.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| size_t | **[tiro_sync_frame_arg_count](/docs/api/files/functions_8h#function-tiro-sync-frame-arg-count)**([tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) frame)<br>Returns the number of function call arguments present in the given frame.  |
| void | **[tiro_sync_frame_arg](/docs/api/files/functions_8h#function-tiro-sync-frame-arg)**([tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) frame, size&#95;t index, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Stores the function call argument with the given `index` into `result`.  |
| void | **[tiro_sync_frame_closure](/docs/api/files/functions_8h#function-tiro-sync-frame-closure)**([tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Returns the closure value which was specified when the function was created.  |
| void | **[tiro_sync_frame_return_value](/docs/api/files/functions_8h#function-tiro-sync-frame-return-value)**([tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[tiro_sync_frame_panic_msg](/docs/api/files/functions_8h#function-tiro-sync-frame-panic-msg)**([tiro&#95;sync&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-sync-frame-t) frame, [tiro&#95;string](/docs/api/classes/structtiro&#95;&#95;string) message, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Signals a panic from the given function call frame.  |
| void | **[tiro_make_sync_function](/docs/api/files/functions_8h#function-tiro-make-sync-function)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) name, [tiro&#95;sync&#95;function&#95;t](/docs/api/files/functions&#95;8h#typedef-tiro-sync-function-t) func, size&#95;t argc, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) closure, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Constructs a new function object with the given name that will invoke the native function `func` when called.  |
| size_t | **[tiro_async_frame_arg_count](/docs/api/files/functions_8h#function-tiro-async-frame-arg-count)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame)<br>Returns the number of function call arguments received by this frame.  |
| void | **[tiro_async_frame_arg](/docs/api/files/functions_8h#function-tiro-async-frame-arg)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, size&#95;t index, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Retrieves the function call argument at the specified index and stores it into `result`.  |
| void | **[tiro_async_frame_closure](/docs/api/files/functions_8h#function-tiro-async-frame-closure)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Returns the closure value which was specified when the function was created.  |
| void | **[tiro_async_frame_return_value](/docs/api/files/functions_8h#function-tiro-async-frame-return-value)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[tiro_async_frame_panic_msg](/docs/api/files/functions_8h#function-tiro-async-frame-panic-msg)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, [tiro&#95;string](/docs/api/classes/structtiro&#95;&#95;string) message, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Signals a panic from the given function call frame.  |
| [tiro_async_token_t](/docs/api/files/def_8h#typedef-tiro-async-token-t) | **[tiro_async_frame_token](/docs/api/files/functions_8h#function-tiro-async-frame-token)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Returns a token for resuming an async function call after yielding.  |
| void | **[tiro_async_frame_yield](/docs/api/files/functions_8h#function-tiro-async-frame-yield)**([tiro&#95;async&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-frame-t) frame, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Yields from an async function call, pausing the current coroutine until it is resumed via an async frame token.  |
| void | **[tiro_make_async_function](/docs/api/files/functions_8h#function-tiro-make-async-function)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) name, [tiro&#95;async&#95;function&#95;t](/docs/api/files/functions&#95;8h#typedef-tiro-async-function-t) func, size&#95;t argc, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) closure, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Constructs a new function object with the given name that will invoke the native function `func` when called.  |
| void | **[tiro_async_token_free](/docs/api/files/functions_8h#function-tiro-async-token-free)**([tiro&#95;async&#95;token&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-token-t) token)<br>Destroys an async token.  |
| void | **[tiro_async_token_return_value](/docs/api/files/functions_8h#function-tiro-async-token-return-value)**([tiro&#95;async&#95;token&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-token-t) token, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Resumes a yielding coroutine that was paused by calling yield from an async function call frame.  |
| void | **[tiro_async_token_panic_msg](/docs/api/files/functions_8h#function-tiro-async-token-panic-msg)**([tiro&#95;async&#95;token&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-token-t) token, [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) message, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Resumes a yielding coroutine that was paused by calling yield from an async function call frame.  |
| size_t | **[tiro_resumable_frame_arg_count](/docs/api/files/functions_8h#function-tiro-resumable-frame-arg-count)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame)<br>Returns the number of function call arguments present in the given frame.  |
| void | **[tiro_resumable_frame_arg](/docs/api/files/functions_8h#function-tiro-resumable-frame-arg)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, size&#95;t index, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Stores the function call argument with the given `index` into `result`.  |
| size_t | **[tiro_resumable_frame_local_count](/docs/api/files/functions_8h#function-tiro-resumable-frame-local-count)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame)<br>Returns the number of local values available in the given frame.  |
| void | **[tiro_resumable_frame_local](/docs/api/files/functions_8h#function-tiro-resumable-frame-local)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, size&#95;t index, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Stores the frame's local value with the given `index` into `result`.  |
| void | **[tiro_resumable_frame_set_local](/docs/api/files/functions_8h#function-tiro-resumable-frame-set-local)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, size&#95;t index, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Stores the given value into the local value slot with the given `index`.  |
| void | **[tiro_resumable_frame_closure](/docs/api/files/functions_8h#function-tiro-resumable-frame-closure)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Returns the closure value which was specified when the function was created.  |
| int | **[tiro_resumable_frame_state](/docs/api/files/functions_8h#function-tiro-resumable-frame-state)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame)<br>Returns the current state of the given frame.  |
| void | **[tiro_resumable_frame_set_state](/docs/api/files/functions_8h#function-tiro-resumable-frame-set-state)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, int next_state, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Sets the current state of the given frame.  |
| void | **[tiro_resumable_frame_invoke](/docs/api/files/functions_8h#function-tiro-resumable-frame-invoke)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, int next_state, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) func, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) args, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Signals the vm that the function `func` shall be invoked with the given arguments in `args`.  |
| void | **[tiro_resumable_frame_invoke_return](/docs/api/files/functions_8h#function-tiro-resumable-frame-invoke-return)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Returns the result of the last function call made via `tiro_resumable_frame_invoke`.  |
| void | **[tiro_resumable_frame_return_value](/docs/api/files/functions_8h#function-tiro-resumable-frame-return-value)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[tiro_resumable_frame_panic_msg](/docs/api/files/functions_8h#function-tiro-resumable-frame-panic-msg)**([tiro&#95;resumable&#95;frame&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-resumable-frame-t) frame, [tiro&#95;string](/docs/api/classes/structtiro&#95;&#95;string) message, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Signals a panic from the given function call frame.  |
| void | **[tiro_make_resumable_function](/docs/api/files/functions_8h#function-tiro-make-resumable-function)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, const [tiro&#95;resumable&#95;frame&#95;desc&#95;t](/docs/api/files/functions&#95;8h#typedef-tiro-resumable-frame-desc-t) &#42; desc, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Constructs a new function object with the given description.  |

## Types Documentation

### enum tiro_resumable_state

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TIRO_RESUMABLE_STATE_START | 0| The initial state value.   |
| TIRO_RESUMABLE_STATE_END | -1| Signals that the function has finished executing.   |



Lists well known state values used by resumable functions. 

All positive integers can be used freely by the application. 


### typedef tiro_sync_function_t

```cpp
typedef void(* tiro_sync_function_t) (tiro_vm_t vm, tiro_sync_frame_t frame);
```

The prototype of a native function callback that provides a synchronous tiro function. 

**Parameters**: 

  * **vm** The virtual machine the function is executing on. 
  * **frame** The function call frame. Use `tiro_sync_frame_arg` and `tiro_sync_frame_arg_count` to access the function call arguments. Call `tiro_sync_frame_result` to set the return value (it defaults to null if not set). The closure is also available by calling `tiro_sync_frame_closure`. The frame value is only valid for the duration of the function call. 


This type of native function is appropriate for simple, nonblocking operations. Use the more complex asynchronous API instead if the operation has the potential of blocking the process.

Note that this API does not allow for custom native userdata. Use native objects instead and pass them in the closure.


### typedef tiro_async_function_t

```cpp
typedef void(* tiro_async_function_t) (tiro_vm_t vm, tiro_async_frame_t frame);
```

The prototype of a native function callback that provides an asynchronous tiro function. 

**Parameters**: 

  * **vm** The virtual machine the function is executing on. 
  * **frame** The function call frame. Use `tiro_async_frame_arg` and `tiro_async_frame_arg_count` to access the function call arguments. Call `tiro_async_frame_return_value` to set the return value (it defaults to null if not set). The closure is also available by calling `tiro_async_frame_closure`.


Functions of this type should be used to implement long running operations that would otherwise block the calling coroutine (for example, a socket read or write).

Calling an asynchronous function can pause ("yield") the calling coroutine. It will be resumed when a result is provided to the resume token object. Attempting to resume a coroutine multiple times is an error.

Note that this API does not allow for custom native userdata. Use native objects instead and pass them in the closure.


The frame is only valid for the duration of the native function call. 


### typedef tiro_resumable_function_t

```cpp
typedef void(* tiro_resumable_function_t) (tiro_vm_t vm, tiro_resumable_frame_t frame);
```

The prototype of a native function that implements a resumable function. 

**Parameters**: 

  * **vm** The virtual machine the function is executing on. 
  * **frame** The function call frame. Use associated functions to manipulate the frame's state, to access function call arguments, etc.


Resumable functions are the most versatile and most complex kind of functions in the native API. They may return or yield any number of times and may also call other tiro functions. Because of the cooperative nature of coroutines in tiro, they must be implemented as state machines.

When a resumable function is invoked by the vm, a new call frame is created on the active coroutine's stack. This frame stores the function call's state (initially `TIRO_RESUMABLE_STATE_START`). The vm will continue to call the native function until it reaches the `TIRO_RESUMABLE_STATE_END` state either by performing a final return or by panicking. Until then, the function may manipulate its own state or invoke other functions by calling the frame's associated functions.

When a resumable function has either returned or panicked, the native function will be called one last time with a special `TIRO_RESUMABLE_STATE_CLEANUP` state that allows it to release any acquired resources.


TODO: yield? 


### typedef tiro_resumable_state_t

```cpp
typedef enum tiro_resumable_state tiro_resumable_state_t;
```

Lists well known state values used by resumable functions. 

All positive integers can be used freely by the application. 


### typedef tiro_resumable_frame_desc_t

```cpp
typedef struct tiro_resumable_frame_desc tiro_resumable_frame_desc_t;
```

Represents construction parameters for a resumable function. 


## Functions Documentation

### function tiro_sync_frame_arg_count

```cpp
size_t tiro_sync_frame_arg_count(
    tiro_sync_frame_t frame
)
```

Returns the number of function call arguments present in the given frame. 

Returns 0 for invalid input arguments. 


### function tiro_sync_frame_arg

```cpp
void tiro_sync_frame_arg(
    tiro_sync_frame_t frame,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Stores the function call argument with the given `index` into `result`. 

Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the argument index is invalid. 


### function tiro_sync_frame_closure

```cpp
void tiro_sync_frame_closure(
    tiro_sync_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the closure value which was specified when the function was created. 

### function tiro_sync_frame_return_value

```cpp
void tiro_sync_frame_return_value(
    tiro_sync_frame_t frame,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the return value for the given function call frame to the given `value`. 

### function tiro_sync_frame_panic_msg

```cpp
void tiro_sync_frame_panic_msg(
    tiro_sync_frame_t frame,
    tiro_string message,
    tiro_error_t * err
)
```

Signals a panic from the given function call frame. 

TODO: Allow user defined exception objects instead of plain string? 


### function tiro_make_sync_function

```cpp
void tiro_make_sync_function(
    tiro_vm_t vm,
    tiro_handle_t name,
    tiro_sync_function_t func,
    size_t argc,
    tiro_handle_t closure,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new function object with the given name that will invoke the native function `func` when called. 

`argc` is the number of arguments required for calling `func`. `closure` may be an arbitrary value that will be passed to the function on every invocation.

On success, the new function will be stored in `result`. Returns `TIRO_BAD_TYPE` if `name` is not a string. Returns `TIRO_BAD_ARG` if the the requested number of parameters is too large. The current maximum is `1024`. 


### function tiro_async_frame_arg_count

```cpp
size_t tiro_async_frame_arg_count(
    tiro_async_frame_t frame
)
```

Returns the number of function call arguments received by this frame. 

Returns 0 on error. 


### function tiro_async_frame_arg

```cpp
void tiro_async_frame_arg(
    tiro_async_frame_t frame,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the function call argument at the specified index and stores it into `result`. 

Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the argument index is invalid. 


### function tiro_async_frame_closure

```cpp
void tiro_async_frame_closure(
    tiro_async_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the closure value which was specified when the function was created. 

### function tiro_async_frame_return_value

```cpp
void tiro_async_frame_return_value(
    tiro_async_frame_t frame,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the return value for the given function call frame to the given `value`. 

This function can be used to signal an immediate return without yielding. 


### function tiro_async_frame_panic_msg

```cpp
void tiro_async_frame_panic_msg(
    tiro_async_frame_t frame,
    tiro_string message,
    tiro_error_t * err
)
```

Signals a panic from the given function call frame. 

This function can be used to signal an immediate panic without yielding. TODO: Allow user defined exception objects instead of plain string? 


### function tiro_async_frame_token

```cpp
tiro_async_token_t tiro_async_frame_token(
    tiro_async_frame_t frame,
    tiro_error_t * err
)
```

Returns a token for resuming an async function call after yielding. 

**Return**: The async token or `NULL` in case of an error. 

Yielding from an async function call must be implemented by



1. acquiring an async token and storing it somewhere
2. scheduling some asynchronous operation
3. calling `tiro_async_frame_yield` and returning from the native function call
After the async operation has completed, the coroutine may be resumed by



1. calling `tiro_async_token_return_value` or `tiro_async_token_panic_msg` to provide a function result
2. calling `tiro_async_token_free` to destroy the token
The token must be freed via `tiro_async_token_free` when it is no longer needed.

NOTE: When a vm instance is being destroyed, all async tokens will be freed automatically if they have not been freed already. It is not necessary to resume an async function call when the vm is shutting down.


### function tiro_async_frame_yield

```cpp
void tiro_async_frame_yield(
    tiro_async_frame_t frame,
    tiro_error_t * err
)
```

Yields from an async function call, pausing the current coroutine until it is resumed via an async frame token. 

The native function should return immediately after calling this function. 


### function tiro_make_async_function

```cpp
void tiro_make_async_function(
    tiro_vm_t vm,
    tiro_handle_t name,
    tiro_async_function_t func,
    size_t argc,
    tiro_handle_t closure,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new function object with the given name that will invoke the native function `func` when called. 

`argc` is the number of arguments required for calling `func`. `closure` may be an arbitrary value that will be passed to the function on every invocation.

On success, the new function will be stored in `result`. Returns `TIRO_BAD_TYPE` if `name` is not a string. Returns `TIRO_BAD_ARG` if the the requested number of parameters is too large. The current maximum is `1024`. 


### function tiro_async_token_free

```cpp
void tiro_async_token_free(
    tiro_async_token_t token
)
```

Destroys an async token. 

Must be called for each token in order to clean up memory associated with the given token. 


### function tiro_async_token_return_value

```cpp
void tiro_async_token_return_value(
    tiro_async_token_t token,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Resumes a yielding coroutine that was paused by calling yield from an async function call frame. 

The associated async function call will return with the given value.

Async token must be freed when they are no longer needed. 


### function tiro_async_token_panic_msg

```cpp
void tiro_async_token_panic_msg(
    tiro_async_token_t token,
    tiro_string_t message,
    tiro_error_t * err
)
```

Resumes a yielding coroutine that was paused by calling yield from an async function call frame. 

The associated async function call will panic with the given error message.

Async token must be freed when they are no longer needed. 


### function tiro_resumable_frame_arg_count

```cpp
size_t tiro_resumable_frame_arg_count(
    tiro_resumable_frame_t frame
)
```

Returns the number of function call arguments present in the given frame. 

Returns 0 for invalid input arguments. 


### function tiro_resumable_frame_arg

```cpp
void tiro_resumable_frame_arg(
    tiro_resumable_frame_t frame,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Stores the function call argument with the given `index` into `result`. 

Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the argument index is invalid.

NOTE: this could return a handle directly, provided that the handle is only used while the frame pointer is valid. 


### function tiro_resumable_frame_local_count

```cpp
size_t tiro_resumable_frame_local_count(
    tiro_resumable_frame_t frame
)
```

Returns the number of local values available in the given frame. 

Returns 0 for invalid input arguments. 


### function tiro_resumable_frame_local

```cpp
void tiro_resumable_frame_local(
    tiro_resumable_frame_t frame,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Stores the frame's local value with the given `index` into `result`. 

Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the local index is invalid.

Local values are private to a function frame (i.e. the current function execution) and persist between calls to the implementing native function. They can be used to transport values between yields or nested function calls.

NOTE: this could return a mutable handle directly, provided that the handle is only used while the frame pointer is valid. 


### function tiro_resumable_frame_set_local

```cpp
void tiro_resumable_frame_set_local(
    tiro_resumable_frame_t frame,
    size_t index,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Stores the given value into the local value slot with the given `index`. 

Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the local index is invalid.

Local values are private to a function frame (i.e. the current function execution) and persist between calls to the implementing native function. They can be used to transport values between yields or nested function calls.

NOTE: this function would not be necessary if get_local returned a handle. 


### function tiro_resumable_frame_closure

```cpp
void tiro_resumable_frame_closure(
    tiro_resumable_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the closure value which was specified when the function was created. 

### function tiro_resumable_frame_state

```cpp
int tiro_resumable_frame_state(
    tiro_resumable_frame_t frame
)
```

Returns the current state of the given frame. 

Returns 0 for invalid input arguments. 


### function tiro_resumable_frame_set_state

```cpp
void tiro_resumable_frame_set_state(
    tiro_resumable_frame_t frame,
    int next_state,
    tiro_error_t * err
)
```

Sets the current state of the given frame. 

**Parameters**: 

  * **frame** The resumable call frame 
  * **next_state** The new state value 


It is usually not necessary to invoke this function directly as changing the state is also implied by other functions like `tiro_resumable_frame_invoke` and `tiro_resumable_frame_return_value`.

The calling native function should return after altering the state. The new state will be active when the native function is called for the next time.

Note that a few states have special meaning (see `tiro_resumable_state_t`).


### function tiro_resumable_frame_invoke

```cpp
void tiro_resumable_frame_invoke(
    tiro_resumable_frame_t frame,
    int next_state,
    tiro_handle_t func,
    tiro_handle_t args,
    tiro_error_t * err
)
```

Signals the vm that the function `func` shall be invoked with the given arguments in `args`. 

**Parameters**: 

  * **frame** The resumable call frame 
  * **next_state** The new state value 
  * **func** Must refer to a valid function 
  * **args** Must be either `NULL` (no arguments), refer to a null value (same) or a valid tuple (the function call arguments). 


`func` will be invoked after the native function returned to the vm. The current native function will be called again when `func` has itself returned, and its return value will be accessible via `tiro_resumable_frame_invoke_return(...)`.

Calling this function implies a state change to `next_state`, which will be the frame's state when the native function is called again after `func`'s execution.


### function tiro_resumable_frame_invoke_return

```cpp
void tiro_resumable_frame_invoke_return(
    tiro_resumable_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the result of the last function call made via `tiro_resumable_frame_invoke`. 

**Parameters**: 

  * **frame** The resumable call frame 
  * **result** Will be set to the function's return value. 


Only returns a useful value when the native function is called again for the first time after calling `tiro_resumable_frame_invoke` and returning to the vm.


### function tiro_resumable_frame_return_value

```cpp
void tiro_resumable_frame_return_value(
    tiro_resumable_frame_t frame,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the return value for the given function call frame to the given `value`. 

The call frame's state is also set to `END` as a result of this call. 


### function tiro_resumable_frame_panic_msg

```cpp
void tiro_resumable_frame_panic_msg(
    tiro_resumable_frame_t frame,
    tiro_string message,
    tiro_error_t * err
)
```

Signals a panic from the given function call frame. 

The call frame's state is also set to `END` as a result of this call.

TODO: Allow user defined exception objects instead of plain string? 


### function tiro_make_resumable_function

```cpp
void tiro_make_resumable_function(
    tiro_vm_t vm,
    const tiro_resumable_frame_desc_t * desc,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new function object with the given description. 

On success, the new function will be stored in `result`. 






-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100
