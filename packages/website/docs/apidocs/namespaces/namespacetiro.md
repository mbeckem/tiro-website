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
| struct | **[tiro::vm_settings](/docs/api/classes/structtiro_1_1vm__settings)** <br>Settings to control the construction of a virtual machine.  |
| class | **[tiro::vm](/docs/api/classes/classtiro_1_1vm)**  |
| struct | **[tiro::version](/docs/api/classes/structtiro_1_1version)** <br>Represents a library version.  |
| class | **[tiro::type](/docs/api/classes/classtiro_1_1type)**  |
| class | **[tiro::tuple](/docs/api/classes/classtiro_1_1tuple)**  |
| class | **[tiro::sync_frame](/docs/api/classes/classtiro_1_1sync__frame)**  |
| class | **[tiro::string](/docs/api/classes/classtiro_1_1string)**  |
| class | **[tiro::result](/docs/api/classes/classtiro_1_1result)**  |
| class | **[tiro::record](/docs/api/classes/classtiro_1_1record)**  |
| class | **[tiro::null](/docs/api/classes/classtiro_1_1null)**  |
| class | **[tiro::native_type](/docs/api/classes/classtiro_1_1native__type)**  |
| class | **[tiro::native](/docs/api/classes/classtiro_1_1native)**  |
| class | **[tiro::module](/docs/api/classes/classtiro_1_1module)**  |
| class | **[tiro::integer](/docs/api/classes/classtiro_1_1integer)**  |
| class | **[tiro::handle](/docs/api/classes/classtiro_1_1handle)** <br>A handle represents a reference to an object.  |
| class | **[tiro::generic_error](/docs/api/classes/classtiro_1_1generic__error)** <br>Generic error with a simple message.  |
| class | **[tiro::function](/docs/api/classes/classtiro_1_1function)**  |
| class | **[tiro::float_](/docs/api/classes/classtiro_1_1float__)**  |
| class | **[tiro::exception](/docs/api/classes/classtiro_1_1exception)**  |
| class | **[tiro::error_adapter](/docs/api/classes/classtiro_1_1error__adapter)**  |
| class | **[tiro::error](/docs/api/classes/classtiro_1_1error)** <br>Base class for all errors thrown by this library.  |
| class | **[tiro::coroutine](/docs/api/classes/classtiro_1_1coroutine)**  |
| struct | **[tiro::compiler_settings](/docs/api/classes/structtiro_1_1compiler__settings)**  |
| class | **[tiro::compiler](/docs/api/classes/classtiro_1_1compiler)**  |
| class | **[tiro::compiled_module](/docs/api/classes/classtiro_1_1compiled__module)**  |
| class | **[tiro::boolean](/docs/api/classes/classtiro_1_1boolean)**  |
| class | **[tiro::bad_handle_check](/docs/api/classes/classtiro_1_1bad__handle__check)** <br>Thrown when a debug mode handle check failed.  |
| class | **[tiro::bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast)** <br>Thrown when an invalid cast is attempted.  |
| class | **[tiro::async_frame](/docs/api/classes/classtiro_1_1async__frame)**  |
| class | **[tiro::array](/docs/api/classes/classtiro_1_1array)**  |
| class | **[tiro::api_error](/docs/api/classes/classtiro_1_1api__error)** <br>Represents an error thrown by the tiro c library.  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class int | **[value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind)** { type = TIRO_KIND_TYPE, tuple = TIRO_KIND_TUPLE, string = TIRO_KIND_STRING, result = TIRO_KIND_RESULT, record = TIRO_KIND_RECORD, null = TIRO_KIND_NULL, native = TIRO_KIND_NATIVE, module = TIRO_KIND_MODULE, invalid = TIRO_KIND_INVALID, internal = TIRO_KIND_INTERNAL, integer = TIRO_KIND_INTEGER, function = TIRO_KIND_FUNCTION, float_ = TIRO_KIND_FLOAT, exception = TIRO_KIND_EXCEPTION, coroutine = TIRO_KIND_COROUTINE, boolean = TIRO_KIND_BOOLEAN, array = TIRO_KIND_ARRAY}<br>Represents the kind of a value.  |
| enum class int | **[severity](/docs/api/namespaces/namespacetiro#enum-severity)** { warning = TIRO_SEVERITY_WARNING, error = TIRO_SEVERITY_ERROR} |
| enum class int | **[api_errc](/docs/api/namespaces/namespacetiro#enum-api_errc)** { out_of_bounds = TIRO_ERROR_OUT_OF_BOUNDS, ok = TIRO_OK, module_not_found = TIRO_ERROR_MODULE_NOT_FOUND, module_exists = TIRO_ERROR_MODULE_EXISTS, internal = TIRO_ERROR_INTERNAL, export_not_found = TIRO_ERROR_EXPORT_NOT_FOUND, bad_type = TIRO_ERROR_BAD_TYPE, bad_state = TIRO_ERROR_BAD_STATE, bad_source = TIRO_ERROR_BAD_SOURCE, bad_key = TIRO_ERROR_BAD_KEY, bad_arg = TIRO_ERROR_BAD_ARG, alloc = TIRO_ERROR_ALLOC} |

## Functions

|                | Name           |
| -------------- | -------------- |
| const char * | **[to_string](/docs/api/namespaces/namespacetiro#function-to_string)**([severity](/docs/api/namespaces/namespacetiro#enum-severity) s) |
| const char * | **[to_string](/docs/api/namespaces/namespacetiro#function-to_string)**([value_kind](/docs/api/namespaces/namespacetiro#enum-value_kind) k) |
| bool | **[same](/docs/api/namespaces/namespacetiro#function-same)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [handle](/docs/api/classes/classtiro_1_1handle) & a, const [handle](/docs/api/classes/classtiro_1_1handle) & b)<br>Returns true if and only if `a` and `b` refer to the same value.  |
| [version](/docs/api/classes/structtiro_1_1version) | **[runtime_version](/docs/api/namespaces/namespacetiro#function-runtime_version)**()<br>Returns the runtime version of the tiro library, i.e.  |
| template <typename Callback \> <br>void | **[run_async](/docs/api/namespaces/namespacetiro#function-run_async)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [function](/docs/api/classes/classtiro_1_1function) & func, Callback && cb)<br>Schedules execution of `func` in a new coroutine without any arguments.  |
| template <typename Callback \> <br>void | **[run_async](/docs/api/namespaces/namespacetiro#function-run_async)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [function](/docs/api/classes/classtiro_1_1function) & func, const [handle](/docs/api/classes/classtiro_1_1handle) & args, Callback && cb)<br>Schedules execution of `func` in a new coroutine, with the provided arguments.  |
| const char * | **[name](/docs/api/namespaces/namespacetiro#function-name)**([api_errc](/docs/api/namespaces/namespacetiro#enum-api_errc) e)<br>Returns the name of the given error code.  |
| const char * | **[message](/docs/api/namespaces/namespacetiro#function-message)**([api_errc](/docs/api/namespaces/namespacetiro#enum-api_errc) e)<br>Returns the human readable message associated with the error code.  |
| [tuple](/docs/api/classes/classtiro_1_1tuple) | **[make_tuple](/docs/api/namespaces/namespacetiro#function-make_tuple)**([vm](/docs/api/classes/classtiro_1_1vm) & v, size_t size)<br>Constructs a new tuple value with the given size.  |
| template <auto Function\> <br>[function](/docs/api/classes/classtiro_1_1function) | **[make_sync_function](/docs/api/namespaces/namespacetiro#function-make_sync_function)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [string](/docs/api/classes/classtiro_1_1string) & name, size_t argc, const [handle](/docs/api/classes/classtiro_1_1handle) & closure) |
| [result](/docs/api/classes/classtiro_1_1result) | **[make_success](/docs/api/namespaces/namespacetiro#function-make_success)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [handle](/docs/api/classes/classtiro_1_1handle) & value) |
| [string](/docs/api/classes/classtiro_1_1string) | **[make_string](/docs/api/namespaces/namespacetiro#function-make_string)**([vm](/docs/api/classes/classtiro_1_1vm) & v, std::string_view value)<br>Constructs a new string value.  |
| [record](/docs/api/classes/classtiro_1_1record) | **[make_record](/docs/api/namespaces/namespacetiro#function-make_record)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [array](/docs/api/classes/classtiro_1_1array) & keys)<br>Constructs a new record with the given keys.  |
| [null](/docs/api/classes/classtiro_1_1null) | **[make_null](/docs/api/namespaces/namespacetiro#function-make_null)**([vm](/docs/api/classes/classtiro_1_1vm) & v)<br>Constructs a new handle, initialized to null.  |
| [module](/docs/api/classes/classtiro_1_1module) | **[make_module](/docs/api/namespaces/namespacetiro#function-make_module)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const char * name, const std::vector< std::pair< std::string, [handle](/docs/api/classes/classtiro_1_1handle) >> & exports) |
| [integer](/docs/api/classes/classtiro_1_1integer) | **[make_integer](/docs/api/namespaces/namespacetiro#function-make_integer)**([vm](/docs/api/classes/classtiro_1_1vm) & v, int64_t value)<br>Constructs a new integer value.  |
| [float_](/docs/api/classes/classtiro_1_1float__) | **[make_float](/docs/api/namespaces/namespacetiro#function-make_float)**([vm](/docs/api/classes/classtiro_1_1vm) & v, double value)<br>Constructs a new float value.  |
| [result](/docs/api/classes/classtiro_1_1result) | **[make_error](/docs/api/namespaces/namespacetiro#function-make_error)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [handle](/docs/api/classes/classtiro_1_1handle) & err) |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) | **[make_coroutine](/docs/api/namespaces/namespacetiro#function-make_coroutine)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [function](/docs/api/classes/classtiro_1_1function) & func, const [handle](/docs/api/classes/classtiro_1_1handle) & arguments)<br>Constructs a new coroutine value.  |
| [coroutine](/docs/api/classes/classtiro_1_1coroutine) | **[make_coroutine](/docs/api/namespaces/namespacetiro#function-make_coroutine)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [function](/docs/api/classes/classtiro_1_1function) & func)<br>Constructs a new coroutine value.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[make_copy](/docs/api/namespaces/namespacetiro#function-make_copy)**([vm](/docs/api/classes/classtiro_1_1vm) & v, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value)<br>Constructs a new handle as a copy of the given value.  |
| [boolean](/docs/api/classes/classtiro_1_1boolean) | **[make_boolean](/docs/api/namespaces/namespacetiro#function-make_boolean)**([vm](/docs/api/classes/classtiro_1_1vm) & v, bool value)<br>Constructs a new boolean value.  |
| template <auto Function\> <br>[function](/docs/api/classes/classtiro_1_1function) | **[make_async_function](/docs/api/namespaces/namespacetiro#function-make_async_function)**([vm](/docs/api/classes/classtiro_1_1vm) & v, const [string](/docs/api/classes/classtiro_1_1string) & name, size_t argc, const [handle](/docs/api/classes/classtiro_1_1handle) & closure) |
| [array](/docs/api/classes/classtiro_1_1array) | **[make_array](/docs/api/namespaces/namespacetiro#function-make_array)**([vm](/docs/api/classes/classtiro_1_1vm) & v, size_t initial_capacity =0)<br>Constructs a new array with the given initial capacity. The array will be empty.  |
| void | **[load_module](/docs/api/namespaces/namespacetiro#function-load_module)**(const [vm](/docs/api/classes/classtiro_1_1vm) & v, const [module](/docs/api/classes/classtiro_1_1module) & m)<br>Attempts to load the given module into the virtual machine.  |
| [handle](/docs/api/classes/classtiro_1_1handle) | **[get_export](/docs/api/namespaces/namespacetiro#function-get_export)**(const [vm](/docs/api/classes/classtiro_1_1vm) & v, const char * module_name, const char * export_name)<br>Attempts to find an exported value called `export_name` in the module `module_name`.  |
| constexpr [version](/docs/api/classes/structtiro_1_1version) | **[compile_time_version](/docs/api/namespaces/namespacetiro#function-compile_time_version)**()<br>Returns the compile time version of the tiro library, i.e.  |

## Types Documentation

### enum value_kind

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| type | TIRO_KIND_TYPE|   |
| tuple | TIRO_KIND_TUPLE|   |
| string | TIRO_KIND_STRING|   |
| result | TIRO_KIND_RESULT|   |
| record | TIRO_KIND_RECORD|   |
| null | TIRO_KIND_NULL|   |
| native | TIRO_KIND_NATIVE|   |
| module | TIRO_KIND_MODULE|   |
| invalid | TIRO_KIND_INVALID|   |
| internal | TIRO_KIND_INTERNAL|   |
| integer | TIRO_KIND_INTEGER|   |
| function | TIRO_KIND_FUNCTION|   |
| float_ | TIRO_KIND_FLOAT|   |
| exception | TIRO_KIND_EXCEPTION|   |
| coroutine | TIRO_KIND_COROUTINE|   |
| boolean | TIRO_KIND_BOOLEAN|   |
| array | TIRO_KIND_ARRAY|   |



Represents the kind of a value. 

### enum severity

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| warning | TIRO_SEVERITY_WARNING|   |
| error | TIRO_SEVERITY_ERROR|   |




### enum api_errc

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| out_of_bounds | TIRO_ERROR_OUT_OF_BOUNDS|   |
| ok | TIRO_OK|   |
| module_not_found | TIRO_ERROR_MODULE_NOT_FOUND|   |
| module_exists | TIRO_ERROR_MODULE_EXISTS|   |
| internal | TIRO_ERROR_INTERNAL|   |
| export_not_found | TIRO_ERROR_EXPORT_NOT_FOUND|   |
| bad_type | TIRO_ERROR_BAD_TYPE|   |
| bad_state | TIRO_ERROR_BAD_STATE|   |
| bad_source | TIRO_ERROR_BAD_SOURCE|   |
| bad_key | TIRO_ERROR_BAD_KEY|   |
| bad_arg | TIRO_ERROR_BAD_ARG|   |
| alloc | TIRO_ERROR_ALLOC|   |





## Functions Documentation

### function to_string

```cpp
inline const char * to_string(
    severity s
)
```


### function to_string

```cpp
inline const char * to_string(
    value_kind k
)
```


### function same

```cpp
inline bool same(
    vm & v,
    const handle & a,
    const handle & b
)
```

Returns true if and only if `a` and `b` refer to the same value. 

### function runtime_version

```cpp
inline version runtime_version()
```

Returns the runtime version of the tiro library, i.e. 

the version the application is currently running against. 


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

The callback `cb` will be called once `func` has completed its execution. Note that `func` will not be executed from within this function (the next call to `[vm.run_ready()](/docs/api/classes/classtiro_1_1vm#function-run_ready)` will do that). TODO: Extract the result() from the coroutine and pass it directly to the callback. 


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

The callback `cb` will be called once `func` has completed its execution. Note that `func` will not be executed from within this function (the next call to `[vm.run_ready()](/docs/api/classes/classtiro_1_1vm#function-run_ready)` will do that). TODO: Extract the result() from the coroutine and pass it directly to the callback. 


### function name

```cpp
inline const char * name(
    api_errc e
)
```

Returns the name of the given error code. 

### function message

```cpp
inline const char * message(
    api_errc e
)
```

Returns the human readable message associated with the error code. 

### function make_tuple

```cpp
inline tuple make_tuple(
    vm & v,
    size_t size
)
```

Constructs a new tuple value with the given size. 

All elements of that tuple will be initialized to null. 


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


### function make_success

```cpp
inline result make_success(
    vm & v,
    const handle & value
)
```


### function make_string

```cpp
inline string make_string(
    vm & v,
    std::string_view value
)
```

Constructs a new string value. 

### function make_record

```cpp
inline record make_record(
    vm & v,
    const array & keys
)
```

Constructs a new record with the given keys. 

All keys must be unique strings. All values of the record will be initialized to null. 


### function make_null

```cpp
inline null make_null(
    vm & v
)
```

Constructs a new handle, initialized to null. 

### function make_module

```cpp
inline module make_module(
    vm & v,
    const char * name,
    const std::vector< std::pair< std::string, handle >> & exports
)
```


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

### function make_error

```cpp
inline result make_error(
    vm & v,
    const handle & err
)
```


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


### function make_copy

```cpp
inline handle make_copy(
    vm & v,
    tiro_handle_t value
)
```

Constructs a new handle as a copy of the given value. 

### function make_boolean

```cpp
inline boolean make_boolean(
    vm & v,
    bool value
)
```

Constructs a new boolean value. 

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


### function make_array

```cpp
inline array make_array(
    vm & v,
    size_t initial_capacity =0
)
```

Constructs a new array with the given initial capacity. The array will be empty. 

### function load_module

```cpp
inline void load_module(
    const vm & v,
    const module & m
)
```

Attempts to load the given module into the virtual machine. 

### function get_export

```cpp
inline handle get_export(
    const vm & v,
    const char * module_name,
    const char * export_name
)
```

Attempts to find an exported value called `export_name` in the module `module_name`. 

### function compile_time_version

```cpp
inline constexpr version compile_time_version()
```

Returns the compile time version of the tiro library, i.e. 

the version the application was built against. 






-------------------------------

Updated on 24 July 2021 at 14:32:19 CEST