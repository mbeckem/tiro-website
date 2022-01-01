---
title: tiro

---

# tiro



## Namespaces

| Name           |
| -------------- |
| **[tiro::detail](/docs/api/namespaces/namespacetiro_1_1detail)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[tiro::api_error](/docs/api/classes/classtiro_1_1api__error)** <br>Represents an error thrown by the tiro c library.  |
| class | **[tiro::array](/docs/api/classes/classtiro_1_1array)** <br>Refers to an array value.  |
| class | **[tiro::async_frame](/docs/api/classes/classtiro_1_1async__frame)** <br>Represents the call frame of a asynchronous function call.  |
| class | **[tiro::bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast)** <br>Thrown when an invalid cast is attempted.  |
| class | **[tiro::bad_handle_check](/docs/api/classes/classtiro_1_1bad__handle__check)** <br>Thrown when a debug mode handle check failed.  |
| class | **[tiro::boolean](/docs/api/classes/classtiro_1_1boolean)** <br>Refers to a boolean value (true or false).  |
| class | **[tiro::compiled_module](/docs/api/classes/classtiro_1_1compiled__module)** <br>Represents a compiled bytecode module.  |
| class | **[tiro::compiler](/docs/api/classes/classtiro_1_1compiler)** <br>Translates a set of source files into a module.  |
| struct | **[tiro::compiler_message](/docs/api/classes/structtiro_1_1compiler__message)** <br>Represents a diagnostic message emitted by the compiler.  |
| struct | **[tiro::compiler_settings](/docs/api/classes/structtiro_1_1compiler__settings)** <br>An instance of this type can be passed to the compiler to configure it.  |
| class | **[tiro::coroutine](/docs/api/classes/classtiro_1_1coroutine)** <br>Refers to a coroutine.  |
| class | **[tiro::error](/docs/api/classes/classtiro_1_1error)** <br>Base class for all errors thrown by this library.  |
| class | **[tiro::error_adapter](/docs/api/classes/classtiro_1_1error__adapter)** <br>Error adapter class for the tiro_error_t* argument expected by most tiro_* functions.  |
| class | **[tiro::exception](/docs/api/classes/classtiro_1_1exception)** <br>Refers to an exception.  |
| class | **[tiro::float_](/docs/api/classes/classtiro_1_1float__)** <br>Refers to a float value.  |
| class | **[tiro::function](/docs/api/classes/classtiro_1_1function)** <br>Refers to a function value.  |
| class | **[tiro::generic_error](/docs/api/classes/classtiro_1_1generic__error)** <br>Generic error with a simple message.  |
| class | **[tiro::handle](/docs/api/classes/classtiro_1_1handle)** <br>A handle represents a reference to an object.  |
| class | **[tiro::integer](/docs/api/classes/classtiro_1_1integer)** <br>Refers to an integer value.  |
| class | **[tiro::module](/docs/api/classes/classtiro_1_1module)** <br>Refers to a module.  |
| class | **[tiro::native](/docs/api/classes/classtiro_1_1native)** <br>Refers to a native object.  |
| class | **[tiro::native_type](/docs/api/classes/classtiro_1_1native__type)**  |
| class | **[tiro::null](/docs/api/classes/classtiro_1_1null)** <br>Refers to a null value.  |
| class | **[tiro::record](/docs/api/classes/classtiro_1_1record)** <br>Refers to a record value.  |
| class | **[tiro::result](/docs/api/classes/classtiro_1_1result)** <br>Refers to a result value.  |
| class | **[tiro::string](/docs/api/classes/classtiro_1_1string)** <br>Refers to a string value.  |
| class | **[tiro::sync_frame](/docs/api/classes/classtiro_1_1sync__frame)** <br>Represents the call frame of a synchronous function call.  |
| class | **[tiro::tuple](/docs/api/classes/classtiro_1_1tuple)** <br>Refers to a tuple value.  |
| class | **[tiro::type](/docs/api/classes/classtiro_1_1type)** <br>Refers to a type.  |
| struct | **[tiro::version](/docs/api/classes/structtiro_1_1version)** <br>Represents a library version.  |
| class | **[tiro::vm](/docs/api/classes/classtiro_1_1vm)**  |
| struct | **[tiro::vm_settings](/docs/api/classes/structtiro_1_1vm__settings)** <br>Settings to control the construction of a virtual machine.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class int | **[severity](/docs/api/namespaces/namespacetiro#enum-severity)** { warning = TIRO_SEVERITY_WARNING, error = TIRO_SEVERITY_ERROR}<br>Defines the possible values for the severity of diagnostic compiler messages.  |
| enum class int | **[api_errc](/docs/api/namespaces/namespacetiro#enum-api-errc)** { ok = TIRO_OK, bad_state = TIRO_ERROR_BAD_STATE, bad_arg = TIRO_ERROR_BAD_ARG, bad_source = TIRO_ERROR_BAD_SOURCE, bad_type = TIRO_ERROR_BAD_TYPE, bad_key = TIRO_ERROR_BAD_KEY, module_exists = TIRO_ERROR_MODULE_EXISTS, module_not_found = TIRO_ERROR_MODULE_NOT_FOUND, export_not_found = TIRO_ERROR_EXPORT_NOT_FOUND, out_of_bounds = TIRO_ERROR_OUT_OF_BOUNDS, alloc = TIRO_ERROR_ALLOC, internal = TIRO_ERROR_INTERNAL}<br>Defines all possible error codes.  |
| enum class int | **[value_kind](/docs/api/namespaces/namespacetiro#enum-value-kind)** { null = TIRO_KIND_NULL, boolean = TIRO_KIND_BOOLEAN, integer = TIRO_KIND_INTEGER, float_ = TIRO_KIND_FLOAT, string = TIRO_KIND_STRING, function = TIRO_KIND_FUNCTION, tuple = TIRO_KIND_TUPLE, record = TIRO_KIND_RECORD, array = TIRO_KIND_ARRAY, result = TIRO_KIND_RESULT, exception = TIRO_KIND_EXCEPTION, coroutine = TIRO_KIND_COROUTINE, module = TIRO_KIND_MODULE, type = TIRO_KIND_TYPE, native = TIRO_KIND_NATIVE, internal = TIRO_KIND_INTERNAL, invalid = TIRO_KIND_INVALID}<br>Represents the kind of a value.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[to_string](/docs/api/namespaces/namespacetiro#function-to-string)**([severity](/docs/api/namespaces/namespacetiro#enum-severity) s)<br>Returns the string representation of the given severity value.  |
| const char * | **[name](/docs/api/namespaces/namespacetiro#function-name)**([api&#95;errc](/docs/api/namespaces/namespacetiro#enum-api-errc) e)<br>Returns the name of the given error code.  |
| const char * | **[message](/docs/api/namespaces/namespacetiro#function-message)**([api&#95;errc](/docs/api/namespaces/namespacetiro#enum-api-errc) e)<br>Returns the human readable message associated with the error code.  |
| const char * | **[to_string](/docs/api/namespaces/namespacetiro#function-to-string)**([value&#95;kind](/docs/api/namespaces/namespacetiro#enum-value-kind) k)<br>Returns the string representation of the given value kind.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[make_copy](/docs/api/namespaces/namespacetiro#function-make-copy)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) value)<br>Constructs a new handle as a copy of the given value.  |
| bool | **[same](/docs/api/namespaces/namespacetiro#function-same)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & a, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & b)<br>Returns true if and only if `a` and `b` refer to the same value.  |
| [null](/docs/api/classes/classtiro_1_1null) | **[make_null](/docs/api/namespaces/namespacetiro#function-make-null)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v)<br>Constructs a new handle, initialized to null.  |
| [boolean](/docs/api/classes/classtiro_1_1boolean) | **[make_boolean](/docs/api/namespaces/namespacetiro#function-make-boolean)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, bool value)<br>Constructs a new boolean value.  |
| [integer](/docs/api/classes/classtiro_1_1integer) | **[make_integer](/docs/api/namespaces/namespacetiro#function-make-integer)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, int64&#95;t value)<br>Constructs a new integer value.  |
| [float_](/docs/api/classes/classtiro_1_1float__) | **[make_float](/docs/api/namespaces/namespacetiro#function-make-float)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, double value)<br>Constructs a new float value.  |
| [string](/docs/api/classes/classtiro_1_1string) | **[make_string](/docs/api/namespaces/namespacetiro#function-make-string)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, std::string&#95;view value)<br>Constructs a new string value.  |
| template <auto Function\> <br>[function](/docs/api/classes/classtiro_1_1function) | **[make_sync_function](/docs/api/namespaces/namespacetiro#function-make-sync-function)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [string](/docs/api/classes/classtiro&#95;1&#95;1string) & name, size&#95;t argc, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & closure)<br>Constructs a new function object with the given name that will invoke the native function when called.  |
| template <auto Function\> <br>[function](/docs/api/classes/classtiro_1_1function) | **[make_async_function](/docs/api/namespaces/namespacetiro#function-make-async-function)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [string](/docs/api/classes/classtiro&#95;1&#95;1string) & name, size&#95;t argc, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & closure)<br>Constructs a new function object with the given name that will invoke the native function when called.  |
| [tuple](/docs/api/classes/classtiro_1_1tuple) | **[make_tuple](/docs/api/namespaces/namespacetiro#function-make-tuple)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, size&#95;t size)<br>Constructs a new tuple value with the given size.  |
| [record](/docs/api/classes/classtiro_1_1record) | **[make_record](/docs/api/namespaces/namespacetiro#function-make-record)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [array](/docs/api/classes/classtiro&#95;1&#95;1array) & keys)<br>Constructs a new record with the given keys.  |
| [array](/docs/api/classes/classtiro_1_1array) | **[make_array](/docs/api/namespaces/namespacetiro#function-make-array)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, size&#95;t initial_capacity =0)<br>Constructs a new array with the given initial capacity. The array will be empty.  |
| [result](/docs/api/classes/classtiro_1_1result) | **[make_success](/docs/api/namespaces/namespacetiro#function-make-success)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Creates a new successful result with the given value.  |
| [result](/docs/api/classes/classtiro_1_1result) | **[make_error](/docs/api/namespaces/namespacetiro#function-make-error)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & err)<br>Creates a new error result with the given error value.  |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) | **[make_coroutine](/docs/api/namespaces/namespacetiro#function-make-coroutine)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & arguments)<br>Constructs a new coroutine value.  |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) | **[make_coroutine](/docs/api/namespaces/namespacetiro#function-make-coroutine)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func)<br>Constructs a new coroutine value.  |
| [module](/docs/api/classes/classtiro_1_1module) | **[make_module](/docs/api/namespaces/namespacetiro#function-make-module)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, std::string&#95;view name, const std::vector&lt; std::pair&lt; std::string, [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) &gt;&gt; & exports)<br>Creates a new module with the given name and exports.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[get_export](/docs/api/namespaces/namespacetiro#function-get-export)**(const [vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, std::string&#95;view module_name, std::string&#95;view export_name)<br>Attempts to find an exported value called `export_name` in the module `module_name`.  |
| void | **[load_module](/docs/api/namespaces/namespacetiro#function-load-module)**(const [vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [module](/docs/api/classes/classtiro&#95;1&#95;1module) & m)<br>Attempts to load the given module into the virtual machine.  |
| template <typename Callback \> <br>void | **[run_async](/docs/api/namespaces/namespacetiro#function-run-async)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func, Callback && cb)<br>Schedules execution of `func` in a new coroutine without any arguments.  |
| template <typename Callback \> <br>void | **[run_async](/docs/api/namespaces/namespacetiro#function-run-async)**([vm](/docs/api/classes/classtiro&#95;1&#95;1vm) & v, const [function](/docs/api/classes/classtiro&#95;1&#95;1function) & func, const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & args, Callback && cb)<br>Schedules execution of `func` in a new coroutine, with the provided arguments.  |
| constexpr [version](/docs/api/classes/structtiro_1_1version) | **[compile_time_version](/docs/api/namespaces/namespacetiro#function-compile-time-version)**()<br>Returns the compile time version of the tiro library, i.e.  |
| [version](/docs/api/classes/structtiro_1_1version) | **[runtime_version](/docs/api/namespaces/namespacetiro#function-runtime-version)**()<br>Returns the runtime version of the tiro library, i.e.  |

## Types Documentation

### enum severity

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| warning | TIRO_SEVERITY_WARNING|   |
| error | TIRO_SEVERITY_ERROR|   |



Defines the possible values for the severity of diagnostic compiler messages. 

### enum api_errc

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ok | TIRO_OK| Success.   |
| bad_state | TIRO_ERROR_BAD_STATE| Instance is not in the correct state.   |
| bad_arg | TIRO_ERROR_BAD_ARG| Invalid argument.   |
| bad_source | TIRO_ERROR_BAD_SOURCE| Invalid source code.   |
| bad_type | TIRO_ERROR_BAD_TYPE| Operation not supported on type.   |
| bad_key | TIRO_ERROR_BAD_KEY| Key does not exist on object.   |
| module_exists | TIRO_ERROR_MODULE_EXISTS| Module name defined more than once.   |
| module_not_found | TIRO_ERROR_MODULE_NOT_FOUND| Requested module does not exist.   |
| export_not_found | TIRO_ERROR_EXPORT_NOT_FOUND| Requested export does not exist.   |
| out_of_bounds | TIRO_ERROR_OUT_OF_BOUNDS| Argument was out of bounds.   |
| alloc | TIRO_ERROR_ALLOC| Allocation failure.   |
| internal | TIRO_ERROR_INTERNAL| Internal error.   |



Defines all possible error codes. 

### enum value_kind

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| null | TIRO_KIND_NULL| Value is null.   |
| boolean | TIRO_KIND_BOOLEAN| Value is true or false.   |
| integer | TIRO_KIND_INTEGER| Value is an integer.   |
| float_ | TIRO_KIND_FLOAT| Value is a floating point number.   |
| string | TIRO_KIND_STRING| Value is a string.   |
| function | TIRO_KIND_FUNCTION| Value is a function.   |
| tuple | TIRO_KIND_TUPLE| Value is a tuple.   |
| record | TIRO_KIND_RECORD| Value is a record.   |
| array | TIRO_KIND_ARRAY| Value is an array.   |
| result | TIRO_KIND_RESULT| Value is a result.   |
| exception | TIRO_KIND_EXCEPTION| Value is an exception.   |
| coroutine | TIRO_KIND_COROUTINE| Value is a coroutine.   |
| module | TIRO_KIND_MODULE| Value is a module.   |
| type | TIRO_KIND_TYPE| Value is a type.   |
| native | TIRO_KIND_NATIVE| Value is a native object.   |
| internal | TIRO_KIND_INTERNAL| Value is some other, internal type.   |
| invalid | TIRO_KIND_INVALID| Invalid value (e.g. null handle)   |



Represents the kind of a value. 


## Functions Documentation

### function to_string

```cpp
inline const char * to_string(
    severity s
)
```

Returns the string representation of the given severity value. 

The returned string is allocated in static storage. 


### function name

```cpp
inline const char * name(
    api_errc e
)
```

Returns the name of the given error code. 

The returned string is allocated in static storage. 


### function message

```cpp
inline const char * message(
    api_errc e
)
```

Returns the human readable message associated with the error code. 

The returned string is allocated in static storage. 


### function to_string

```cpp
inline const char * to_string(
    value_kind k
)
```

Returns the string representation of the given value kind. 

The returned string is allocated in static storage. 


### function make_copy

```cpp
inline handle make_copy(
    vm & v,
    tiro_handle_t value
)
```

Constructs a new handle as a copy of the given value. 

### function same

```cpp
inline bool same(
    vm & v,
    const handle & a,
    const handle & b
)
```

Returns true if and only if `a` and `b` refer to the same value. 

### function make_null

```cpp
inline null make_null(
    vm & v
)
```

Constructs a new handle, initialized to null. 

### function make_boolean

```cpp
inline boolean make_boolean(
    vm & v,
    bool value
)
```

Constructs a new boolean value. 

### function make_integer

```cpp
inline integer make_integer(
    vm & v,
    int64_t value
)
```

Constructs a new integer value. 

### function make_float

```cpp
inline float_ make_float(
    vm & v,
    double value
)
```

Constructs a new float value. 

### function make_string

```cpp
inline string make_string(
    vm & v,
    std::string_view value
)
```

Constructs a new string value. 

### function make_sync_function

```cpp
template <auto Function>
function make_sync_function(
    vm & v,
    const string & name,
    size_t argc,
    const handle & closure
)
```

Constructs a new function object with the given name that will invoke the native function when called. 

`argc` is the number of arguments required for calling `Function`. `closure` may be an arbitrary value that will be passed to the function on every invocation.

Synchronous functions are appropriate for simple, nonblocking operations. Use asynchronous functions for long running operations (such as network I/O) instead.

`Function` will receive two arguments when invoked:

* A reference to the vm (`vm&`).
* A reference to the call frame (`[sync_frame](/docs/api/classes/classtiro_1_1sync__frame)&`). Use this reference to access call arguments. Both references may only be used during the function call. The function should return its return value as a handle. 


### function make_async_function

```cpp
template <auto Function>
function make_async_function(
    vm & v,
    const string & name,
    size_t argc,
    const handle & closure
)
```

Constructs a new function object with the given name that will invoke the native function when called. 

`argc` is the number of arguments required for calling `Function`. `closure` may be an arbitrary value that will be passed to the function on every invocation.

`Function` will receive two arguments when invoked:

* A reference to the vm (`vm&`).
* A call frame value (`[async_frame](/docs/api/classes/classtiro_1_1async__frame)`). Use this value to access call arguments and to set the return value. 


### function make_tuple

```cpp
inline tuple make_tuple(
    vm & v,
    size_t size
)
```

Constructs a new tuple value with the given size. 

All elements of that tuple will be initialized to null. 


### function make_record

```cpp
inline record make_record(
    vm & v,
    const array & keys
)
```

Constructs a new record with the given keys. 

All keys must be unique strings. All values of the record will be initialized to null. 


### function make_array

```cpp
inline array make_array(
    vm & v,
    size_t initial_capacity =0
)
```

Constructs a new array with the given initial capacity. The array will be empty. 

### function make_success

```cpp
inline result make_success(
    vm & v,
    const handle & value
)
```

Creates a new successful result with the given value. 

### function make_error

```cpp
inline result make_error(
    vm & v,
    const handle & err
)
```

Creates a new error result with the given error value. 

### function make_coroutine

```cpp
inline coroutine make_coroutine(
    vm & v,
    const function & func,
    const handle & arguments
)
```

Constructs a new coroutine value. 

The coroutine will call the given function with the provided arguments, once it has been started. 


### function make_coroutine

```cpp
inline coroutine make_coroutine(
    vm & v,
    const function & func
)
```

Constructs a new coroutine value. 

The coroutine will call the given function without any arguments, once it has been started. 


### function make_module

```cpp
inline module make_module(
    vm & v,
    std::string_view name,
    const std::vector< std::pair< std::string, handle >> & exports
)
```

Creates a new module with the given name and exports. 

### function get_export

```cpp
inline handle get_export(
    const vm & v,
    std::string_view module_name,
    std::string_view export_name
)
```

Attempts to find an exported value called `export_name` in the module `module_name`. 

### function load_module

```cpp
inline void load_module(
    const vm & v,
    const module & m
)
```

Attempts to load the given module into the virtual machine. 

### function run_async

```cpp
template <typename Callback >
inline void run_async(
    vm & v,
    const function & func,
    Callback && cb
)
```

Schedules execution of `func` in a new coroutine without any arguments. 

The callback `cb` will be called once `func` has completed its execution. Note that `func` will not be executed from within this function (the next call to `[vm.run_ready()](/docs/api/classes/classtiro_1_1vm#function-run-ready)` will do that). TODO: Extract the result() from the coroutine and pass it directly to the callback. 


### function run_async

```cpp
template <typename Callback >
inline void run_async(
    vm & v,
    const function & func,
    const handle & args,
    Callback && cb
)
```

Schedules execution of `func` in a new coroutine, with the provided arguments. 

The callback `cb` will be called once `func` has completed its execution. Note that `func` will not be executed from within this function (the next call to `[vm.run_ready()](/docs/api/classes/classtiro_1_1vm#function-run-ready)` will do that). TODO: Extract the result() from the coroutine and pass it directly to the callback. 


### function compile_time_version

```cpp
inline constexpr version compile_time_version()
```

Returns the compile time version of the tiro library, i.e. 

the version the application was built against. 


### function runtime_version

```cpp
inline version runtime_version()
```

Returns the runtime version of the tiro library, i.e. 

the version the application is currently running against. 






-------------------------------

Updated on 2022-01-01 at 12:38:39 +0100