---
title: tiro/objects.h
summary: Functions and type definitions for working with objects of the tiro virtual machine. 

---

# tiro/objects.h

Functions and type definitions for working with objects of the tiro virtual machine. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro_native_type](/docs/api/classes/structtiro__native__type)** <br>Describes a native object type to the tiro runtime.  |
| struct | **[tiro_module_member_t](/docs/api/classes/structtiro__module__member__t)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef void(*)(tiro_vm_t vm, tiro_sync_frame_t frame) | **[tiro_sync_function_t](/docs/api/files/objects_8h#typedef-tiro_sync_function_t)** <br>The prototype of a native function callback that provides a synchronous tiro function.  |
| typedef struct [tiro_native_type](/docs/api/classes/structtiro__native__type) | **[tiro_native_type_t](/docs/api/files/objects_8h#typedef-tiro_native_type_t)** <br>Describes a native object type to the tiro runtime.  |
| typedef struct [tiro_module_member_t](/docs/api/classes/structtiro__module__member__t) | **[tiro_module_member_t](/docs/api/files/objects_8h#typedef-tiro_module_member_t)**  |
| typedef enum [tiro_kind](/docs/api/files/objects_8h#enum-tiro_kind) | **[tiro_kind_t](/docs/api/files/objects_8h#typedef-tiro_kind_t)** <br>Represents the kind of a tiro value.  |
| enum| **[tiro_kind](/docs/api/files/objects_8h#enum-tiro_kind)** { TIRO_KIND_TYPE, TIRO_KIND_TUPLE, TIRO_KIND_STRING, TIRO_KIND_RESULT, TIRO_KIND_RECORD, TIRO_KIND_NULL = 0, TIRO_KIND_NATIVE, TIRO_KIND_MODULE, TIRO_KIND_INVALID, TIRO_KIND_INTERNAL = 1000, TIRO_KIND_INTEGER, TIRO_KIND_FUNCTION, TIRO_KIND_FLOAT, TIRO_KIND_EXCEPTION, TIRO_KIND_COROUTINE, TIRO_KIND_BOOLEAN, TIRO_KIND_ARRAY}<br>Represents the kind of a tiro value.  |
| typedef void(*)(void *userdata) | **[tiro_coroutine_cleanup](/docs/api/files/objects_8h#typedef-tiro_coroutine_cleanup)** <br>Represents a cleanup function associated with a coroutine callback.  |
| typedef void(*)(tiro_vm_t vm, tiro_handle_t coro, void *userdata) | **[tiro_coroutine_callback](/docs/api/files/objects_8h#typedef-tiro_coroutine_callback)** <br>Represents a coroutine completion callback.  |
| typedef void(*)(tiro_vm_t vm, tiro_async_frame_t frame) | **[tiro_async_function_t](/docs/api/files/objects_8h#typedef-tiro_async_function_t)** <br>The prototype of a native function callback that provides an asynchronous tiro function.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[tiro_value_type](/docs/api/files/objects_8h#function-tiro_value_type)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the type of the given `value` by assigning it to `result`.  |
| void | **[tiro_value_to_string](/docs/api/files/objects_8h#function-tiro_value_to_string)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Outputs a string representing the given value.  |
| bool | **[tiro_value_same](/docs/api/files/objects_8h#function-tiro_value_same)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) a, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) b)<br>Returns true if and only if `a` and `b` refer to exactly the same value.  |
| [tiro_kind_t](/docs/api/files/objects_8h#typedef-tiro_kind_t) | **[tiro_value_kind](/docs/api/files/objects_8h#function-tiro_value_kind)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value)<br>Returns the kind of the handle's current value.  |
| void | **[tiro_value_copy](/docs/api/files/objects_8h#function-tiro_value_copy)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Copies the current `value` to `result`.  |
| void | **[tiro_type_name](/docs/api/files/objects_8h#function-tiro_type_name)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) type, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the name of this `type` and assigns it to `result`.  |
| size_t | **[tiro_tuple_size](/docs/api/files/objects_8h#function-tiro_tuple_size)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) tuple)<br>Returns the tuple's size, or 0 if the given value is not a tuple (use `tiro_value_kind` to disambiguate between types).  |
| void | **[tiro_tuple_set](/docs/api/files/objects_8h#function-tiro_tuple_set)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) tuple, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Sets the tuple's element at position `index` to `value`.  |
| void | **[tiro_tuple_get](/docs/api/files/objects_8h#function-tiro_tuple_get)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) tuple, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the tuple element at the given `index` from `tuple` and assigns it to `result`, unless an error occcurs.  |
| void | **[tiro_sync_frame_return_value](/docs/api/files/objects_8h#function-tiro_sync_frame_return_value)**([tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) frame, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[tiro_sync_frame_closure](/docs/api/files/objects_8h#function-tiro_sync_frame_closure)**([tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) frame, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the closure value which was specified when the function was created.  |
| size_t | **[tiro_sync_frame_argc](/docs/api/files/objects_8h#function-tiro_sync_frame_argc)**([tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) frame)<br>Returns the number of function call arguments present in the given frame.  |
| void | **[tiro_sync_frame_arg](/docs/api/files/objects_8h#function-tiro_sync_frame_arg)**([tiro_sync_frame_t](/docs/api/files/def_8h#typedef-tiro_sync_frame_t) frame, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Stores the function call argument with the given `index` into `result`.  |
| void | **[tiro_string_value](/docs/api/files/objects_8h#function-tiro_string_value)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) string, const char ** data, size_t * length, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the string's content as a (data, length)-pair without copying the data.  |
| void | **[tiro_string_cstr](/docs/api/files/objects_8h#function-tiro_string_cstr)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) string, char ** result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the string's content and creates a new zero terminated c string, which is assigned to `*result`.  |
| void | **[tiro_result_value](/docs/api/files/objects_8h#function-tiro_result_value)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) instance, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) out, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the value from the result in `instance` and writes it into `out`.  |
| bool | **[tiro_result_is_success](/docs/api/files/objects_8h#function-tiro_result_is_success)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) instance)<br>Returns true if the result in `instance` represents success.  |
| bool | **[tiro_result_is_error](/docs/api/files/objects_8h#function-tiro_result_is_error)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) instance)<br>Returns true if the result in `instance` represents an error.  |
| void | **[tiro_result_error](/docs/api/files/objects_8h#function-tiro_result_error)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) instance, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) out, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the error from the result in `instance` and writes it into `out`.  |
| void | **[tiro_record_set](/docs/api/files/objects_8h#function-tiro_record_set)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) record, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) key, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Sets the record's value associated with the given `key` to `value`.  |
| void | **[tiro_record_keys](/docs/api/files/objects_8h#function-tiro_record_keys)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) record, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves an array of valid keys for the given record.  |
| void | **[tiro_record_get](/docs/api/files/objects_8h#function-tiro_record_get)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) record, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) key, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the value associated with the given key on this record.  |
| const [tiro_native_type_t](/docs/api/files/objects_8h#typedef-tiro_native_type_t) * | **[tiro_native_type_descriptor](/docs/api/files/objects_8h#function-tiro_native_type_descriptor)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) object)<br>Returns the address of the `tiro_native_type_t` instance that was used to create the given native object.  |
| size_t | **[tiro_native_size](/docs/api/files/objects_8h#function-tiro_native_size)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) object)<br>Returns the size (in bytes) of the given native object's user storage.  |
| void * | **[tiro_native_data](/docs/api/files/objects_8h#function-tiro_native_data)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) object)<br>Returns the address of the allocated user storage of the given native object.  |
| void | **[tiro_module_get_export](/docs/api/files/objects_8h#function-tiro_module_get_export)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) module, const char * export_name, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Attempts to retrieve the exported module member called `export_name` from the given module.  |
| void | **[tiro_make_tuple](/docs/api/files/objects_8h#function-tiro_make_tuple)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, size_t size, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new tuple with `size` entries.  |
| void | **[tiro_make_sync_function](/docs/api/files/objects_8h#function-tiro_make_sync_function)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) name, [tiro_sync_function_t](/docs/api/files/objects_8h#typedef-tiro_sync_function_t) func, size_t argc, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) closure, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new function object with the given name that will invoke the native function `func` when called.  |
| void | **[tiro_make_success](/docs/api/files/objects_8h#function-tiro_make_success)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new successful result with the given value.  |
| void | **[tiro_make_string_from_data](/docs/api/files/objects_8h#function-tiro_make_string_from_data)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, const char * data, size_t length, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new string with the given content.  |
| void | **[tiro_make_string](/docs/api/files/objects_8h#function-tiro_make_string)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, const char * value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new string with the given content.  |
| void | **[tiro_make_record](/docs/api/files/objects_8h#function-tiro_make_record)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) keys, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new record with the given key names.  |
| void | **[tiro_make_null](/docs/api/files/objects_8h#function-tiro_make_null)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result)<br>Sets the given `result` handle to null.  |
| void | **[tiro_make_native](/docs/api/files/objects_8h#function-tiro_make_native)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, const [tiro_native_type_t](/docs/api/files/objects_8h#typedef-tiro_native_type_t) * type_descriptor, size_t size, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new native object of the given type and size.  |
| void | **[tiro_make_module](/docs/api/files/objects_8h#function-tiro_make_module)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, const char * name, [tiro_module_member_t](/docs/api/classes/structtiro__module__member__t) * members, size_t members_length, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Creates a new module with the given `name` from the given `members` list.  |
| void | **[tiro_make_integer](/docs/api/files/objects_8h#function-tiro_make_integer)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, int64_t value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs an integer with the given value.  |
| void | **[tiro_make_float](/docs/api/files/objects_8h#function-tiro_make_float)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, double value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a float with the given value.  |
| void | **[tiro_make_error](/docs/api/files/objects_8h#function-tiro_make_error)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) error, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new error result with the given error.  |
| void | **[tiro_make_coroutine](/docs/api/files/objects_8h#function-tiro_make_coroutine)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) func, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) arguments, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new coroutine that will execute the given function.  |
| void | **[tiro_make_boolean](/docs/api/files/objects_8h#function-tiro_make_boolean)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, bool value, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the specified boolean value via the output argument `result`.  |
| void | **[tiro_make_async_function](/docs/api/files/objects_8h#function-tiro_make_async_function)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) name, [tiro_async_function_t](/docs/api/files/objects_8h#typedef-tiro_async_function_t) func, size_t argc, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) closure, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new function object with the given name that will invoke the native function `func` when called.  |
| void | **[tiro_make_array](/docs/api/files/objects_8h#function-tiro_make_array)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, size_t initial_capacity, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Constructs a new, empty array with the given initial capacity.  |
| void | **[tiro_kind_type](/docs/api/files/objects_8h#function-tiro_kind_type)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_kind_t](/docs/api/files/objects_8h#typedef-tiro_kind_t) kind, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the type instance that corresponds to the given `kind` and assigns it to `result`.  |
| const char * | **[tiro_kind_str](/docs/api/files/objects_8h#function-tiro_kind_str)**([tiro_kind_t](/docs/api/files/objects_8h#typedef-tiro_kind_t) kind)<br>Returns the name of the kind, formatted as a string.  |
| int64_t | **[tiro_integer_value](/docs/api/files/objects_8h#function-tiro_integer_value)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value)<br>Returns `value` converted to an integer.  |
| double | **[tiro_float_value](/docs/api/files/objects_8h#function-tiro_float_value)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value)<br>Returns the floating point of `value`.  |
| void | **[tiro_exception_message](/docs/api/files/objects_8h#function-tiro_exception_message)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) instance, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the message from the exception in `instance` and writes it into `result`.  |
| bool | **[tiro_coroutine_started](/docs/api/files/objects_8h#function-tiro_coroutine_started)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) coroutine)<br>Returns true if the coroutine has been started, false otherwise.  |
| void | **[tiro_coroutine_start](/docs/api/files/objects_8h#function-tiro_coroutine_start)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) coroutine, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Starts the given coroutine by scheduling it for execution.  |
| void | **[tiro_coroutine_set_callback](/docs/api/files/objects_8h#function-tiro_coroutine_set_callback)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) coroutine, [tiro_coroutine_callback](/docs/api/files/objects_8h#typedef-tiro_coroutine_callback) callback, [tiro_coroutine_cleanup](/docs/api/files/objects_8h#typedef-tiro_coroutine_cleanup) cleanup, void * userdata, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Schedules the given callback to be invoked once the coroutine completes.  |
| void | **[tiro_coroutine_result](/docs/api/files/objects_8h#function-tiro_coroutine_result)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) coroutine, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the coroutine's result by assigning it to `result`.  |
| bool | **[tiro_coroutine_completed](/docs/api/files/objects_8h#function-tiro_coroutine_completed)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) coroutine)<br>Returns true if the coroutine has finished its execution, false otherwise.  |
| bool | **[tiro_boolean_value](/docs/api/files/objects_8h#function-tiro_boolean_value)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value)<br>Returns `value` converted to a boolean value.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[tiro_async_frame_vm](/docs/api/files/objects_8h#function-tiro_async_frame_vm)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame)<br>Returns the vm instance that this frame belongs to.  |
| void | **[tiro_async_frame_return_value](/docs/api/files/objects_8h#function-tiro_async_frame_return_value)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Sets the return value for the given function call frame to the given `value`.  |
| void | **[tiro_async_frame_free](/docs/api/files/objects_8h#function-tiro_async_frame_free)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame)<br>Frees an async frame.  |
| void | **[tiro_async_frame_closure](/docs/api/files/objects_8h#function-tiro_async_frame_closure)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Returns the closure value which was specified when the function was created.  |
| size_t | **[tiro_async_frame_argc](/docs/api/files/objects_8h#function-tiro_async_frame_argc)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame)<br>Returns the number of function call arguments received by this frame.  |
| void | **[tiro_async_frame_arg](/docs/api/files/objects_8h#function-tiro_async_frame_arg)**([tiro_async_frame_t](/docs/api/files/def_8h#typedef-tiro_async_frame_t) frame, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the function call argument at the specified index and stores it into `result`.  |
| size_t | **[tiro_array_size](/docs/api/files/objects_8h#function-tiro_array_size)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array)<br>Returns the array's size, or 0 if the given value is not an array (use `tiro_value_kind` to disambiguate between types).  |
| void | **[tiro_array_set](/docs/api/files/objects_8h#function-tiro_array_set)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Sets the array's element at position `index` to `value`.  |
| void | **[tiro_array_push](/docs/api/files/objects_8h#function-tiro_array_push)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) value, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Appends `value` to the given `array`.  |
| void | **[tiro_array_pop](/docs/api/files/objects_8h#function-tiro_array_pop)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Removes the last element from the given `array`.  |
| void | **[tiro_array_get](/docs/api/files/objects_8h#function-tiro_array_get)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array, size_t index, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) result, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Retrieves the array element at the given `index` from `array` and assigns it to `result`, unless an error occcurs.  |
| void | **[tiro_array_clear](/docs/api/files/objects_8h#function-tiro_array_clear)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) array, [tiro_error_t](/docs/api/files/def_8h#typedef-tiro_error_t) * err)<br>Removes all elements from the given `array`.  |

## Types Documentation

### typedef tiro_sync_function_t

```cpp
typedef void(* tiro_sync_function_t) (tiro_vm_t vm, tiro_sync_frame_t frame);
```

The prototype of a native function callback that provides a synchronous tiro function. 

**Parameters**: 

  * **vm** The virtual machine the function is executing on. 
  * **frame** The function call frame. Use `tiro_sync_frame_arg` and `tiro_sync_frame_argc` to access the function call arguments. Call `tiro_sync_frame_result` to set the return value (it defaults to null if not set). The closure is also available by calling `tiro_sync_frame_closure`. The frame value is only valid for the duration of the function call.


This type of native function is appropriate for simple, nonblocking operations. Use the more complex asynchronous API instead if the operation has the potential of blocking the process.

Note that this API does not allow for custom native userdata. Use native objects instead and pass them in the closure.


TODO: Exception API 


### typedef tiro_native_type_t

```cpp
typedef struct tiro_native_type tiro_native_type_t;
```

Describes a native object type to the tiro runtime. 

**Todo**: DRAFT API. Will probably be replaced with native user defined types.

**Warning**: The native type instance must not be changed while it is being referenced by native objects! 

Instances of this type must be provided to the API when constructing a new native object.

Native objects that are created with a certain type will continue refencing that type instance by its address. The lifetime of `tiro_native_type_t` instances is not managued by the runtime, they must remain valid for as long as there are native objects referring to them.


### typedef tiro_module_member_t

```cpp
typedef struct tiro_module_member_t tiro_module_member_t;
```


### typedef tiro_kind_t

```cpp
typedef enum tiro_kind tiro_kind_t;
```

Represents the kind of a tiro value. 

### enum tiro_kind

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| TIRO_KIND_TYPE | | Value is a type.   |
| TIRO_KIND_TUPLE | | Value is a tuple.   |
| TIRO_KIND_STRING | | Value is a string.   |
| TIRO_KIND_RESULT | | Value is a result.   |
| TIRO_KIND_RECORD | | Value is a record.   |
| TIRO_KIND_NULL | 0| Value is null.   |
| TIRO_KIND_NATIVE | | Value is a native object.   |
| TIRO_KIND_MODULE | | Value is a module.   |
| TIRO_KIND_INVALID | | Invalid value (e.g. null handle)   |
| TIRO_KIND_INTERNAL | 1000| Value is some other, internal type.   |
| TIRO_KIND_INTEGER | | Value is an integer.   |
| TIRO_KIND_FUNCTION | | Value is a function.   |
| TIRO_KIND_FLOAT | | Value is a floating point number.   |
| TIRO_KIND_EXCEPTION | | Value is an exception.   |
| TIRO_KIND_COROUTINE | | Value is a coroutine.   |
| TIRO_KIND_BOOLEAN | | Value is true or false.   |
| TIRO_KIND_ARRAY | | Value is an array.   |



Represents the kind of a tiro value. 

### typedef tiro_coroutine_cleanup

```cpp
typedef void(* tiro_coroutine_cleanup) (void *userdata);
```

Represents a cleanup function associated with a coroutine callback. 

**Parameters**: 

  * **userdata** The original userdata pointer that was provided when the callback was registered.


Cleanup functions are always executed immediately after the callback was invoked, or when the virtual machine is shutting down prior to the coroutine's completion. The cleanup function is always executed exactly once.


TODO: Does the cleanup function need access to the vm instance? 


### typedef tiro_coroutine_callback

```cpp
typedef void(* tiro_coroutine_callback) (tiro_vm_t vm, tiro_handle_t coro, void *userdata);
```

Represents a coroutine completion callback. 

**Parameters**: 

  * **vm** The virtual machine the coroutine was running on. 
  * **coro** The completed coroutine. 
  * **userdata** The original userdata pointer that was provided when the callback was registered. 


These are invoked when a coroutine finishes execution, either successfully or with an error.


### typedef tiro_async_function_t

```cpp
typedef void(* tiro_async_function_t) (tiro_vm_t vm, tiro_async_frame_t frame);
```

The prototype of a native function callback that provides an asynchronous tiro function. 

**Parameters**: 

  * **vm** The virtual machine the function is executing on. 
  * **frame** The function call frame. Use `tiro_async_frame_arg` and `tiro_async_frame_argc` to access the function call arguments. Call `tiro_async_frame_return_value` to set the return value (it defaults to null if not set). The closure is also available by calling `tiro_async_frame_closure`.


Functions of this type should be used to implement long running operations that would otherwise block the calling coroutine (for example, a socket read or write).

Calling an asynchronous function will pause ("yield") the calling coroutine. It will be resumed when a result is provided to the frame object, e.g. by calling `tiro_async_frame_return_value`. Attempting to resume a coroutine multiple times is an error.

Note that this API does not allow for custom native userdata. Use native objects instead and pass them in the closure.


The frame remains valid until it is freed by the caller by invoking `tiro_async_frame_free` (forgetting to free a frame results in a memory leak).

TODO: Exception API 



## Functions Documentation

### function tiro_value_type

```cpp
void tiro_value_type(
    tiro_vm_t vm,
    tiro_handle_t value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the type of the given `value` by assigning it to `result`. 

This function will fail with an error when attempting to access an internal type. 


### function tiro_value_to_string

```cpp
void tiro_value_to_string(
    tiro_vm_t vm,
    tiro_handle_t value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Outputs a string representing the given value. 

The string is assigned to `result`. 


### function tiro_value_same

```cpp
bool tiro_value_same(
    tiro_vm_t vm,
    tiro_handle_t a,
    tiro_handle_t b
)
```

Returns true if and only if `a` and `b` refer to exactly the same value. 

### function tiro_value_kind

```cpp
tiro_kind_t tiro_value_kind(
    tiro_vm_t vm,
    tiro_handle_t value
)
```

Returns the kind of the handle's current value. 

### function tiro_value_copy

```cpp
void tiro_value_copy(
    tiro_vm_t vm,
    tiro_handle_t value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Copies the current `value` to `result`. 

### function tiro_type_name

```cpp
void tiro_type_name(
    tiro_vm_t vm,
    tiro_handle_t type,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the name of this `type` and assigns it to `result`. 

Returns `TIRO_ERROR_BAD_TYPE` if the value is not a type. 


### function tiro_tuple_size

```cpp
size_t tiro_tuple_size(
    tiro_vm_t vm,
    tiro_handle_t tuple
)
```

Returns the tuple's size, or 0 if the given value is not a tuple (use `tiro_value_kind` to disambiguate between types). 

### function tiro_tuple_set

```cpp
void tiro_tuple_set(
    tiro_vm_t vm,
    tiro_handle_t tuple,
    size_t index,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the tuple's element at position `index` to `value`. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not a tuple, or `TIRO_ERROR_OUT_OF_BOUNDS` if the index is out of bounds. 


### function tiro_tuple_get

```cpp
void tiro_tuple_get(
    tiro_vm_t vm,
    tiro_handle_t tuple,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the tuple element at the given `index` from `tuple` and assigns it to `result`, unless an error occcurs. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not a tuple, or `TIRO_ERROR_OUT_OF_BOUNDS` if the index is out of bounds. 


### function tiro_sync_frame_return_value

```cpp
void tiro_sync_frame_return_value(
    tiro_sync_frame_t frame,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the return value for the given function call frame to the given `value`. 

### function tiro_sync_frame_closure

```cpp
void tiro_sync_frame_closure(
    tiro_sync_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the closure value which was specified when the function was created. 

### function tiro_sync_frame_argc

```cpp
size_t tiro_sync_frame_argc(
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


### function tiro_string_value

```cpp
void tiro_string_value(
    tiro_vm_t vm,
    tiro_handle_t string,
    const char ** data,
    size_t * length,
    tiro_error_t * err
)
```

Retrieves the string's content as a (data, length)-pair without copying the data. 

**Warning**: 

  * The string content returned through `data` and `length` is a view into the string's current storage. Because objects may move on the heap (e.g. because of garbage collection), this data may be invalidated. The data may only be used immediately after calling this function, and must not be used after another possibly allocating tiro_* function has been called.
  * The string returned by this function is not zero terminated. 


The pointer to the string's storage will be placed in `*data`, and the length (in bytes) will be assigned to `*length`. Returns `TIRO_ERROR_BAD_TYPE` if the value is not actually a string.


### function tiro_string_cstr

```cpp
void tiro_string_cstr(
    tiro_vm_t vm,
    tiro_handle_t string,
    char ** result,
    tiro_error_t * err
)
```

Retrieves the string's content and creates a new zero terminated c string, which is assigned to `*result`. 

`*result` is only assigned to if the construction of the string succeeded (in which case `TIRO_OK` will be returned). Returns `TIRO_ERROR_BAD_TYPE` if the value is not actually a string.

If `TIRO_OK` was returned, then `*result` must be passed to `free` for cleanup. 


### function tiro_result_value

```cpp
void tiro_result_value(
    tiro_vm_t vm,
    tiro_handle_t instance,
    tiro_handle_t out,
    tiro_error_t * err
)
```

Retrieves the value from the result in `instance` and writes it into `out`. 

Returns `TIRO_ERROR_BAD_STATE` if the result does not represent success, or `TIRO_ERROR_BAD_TYPE` if the instance is no result at all. 


### function tiro_result_is_success

```cpp
bool tiro_result_is_success(
    tiro_vm_t vm,
    tiro_handle_t instance
)
```

Returns true if the result in `instance` represents success. 

### function tiro_result_is_error

```cpp
bool tiro_result_is_error(
    tiro_vm_t vm,
    tiro_handle_t instance
)
```

Returns true if the result in `instance` represents an error. 

### function tiro_result_error

```cpp
void tiro_result_error(
    tiro_vm_t vm,
    tiro_handle_t instance,
    tiro_handle_t out,
    tiro_error_t * err
)
```

Retrieves the error from the result in `instance` and writes it into `out`. 

Returns `TIRO_ERROR_BAD_STATE` if the result does not represent an error, or `TIRO_ERROR_BAD_TYPE` if the instance is no result at all. 


### function tiro_record_set

```cpp
void tiro_record_set(
    tiro_vm_t vm,
    tiro_handle_t record,
    tiro_handle_t key,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the record's value associated with the given `key` to `value`. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not a record, or if `key` is not a string. Returns `TIRO_ERROR_BAD_KEY` if the key is invalid for this record. 


### function tiro_record_keys

```cpp
void tiro_record_keys(
    tiro_vm_t vm,
    tiro_handle_t record,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves an array of valid keys for the given record. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not a record. 


### function tiro_record_get

```cpp
void tiro_record_get(
    tiro_vm_t vm,
    tiro_handle_t record,
    tiro_handle_t key,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the value associated with the given key on this record. 

On success, the value will be assigned to `result`. Returns `TIRO_ERROR_BAD_TYPE` if the instance is not a record, or if `key` is not a string. Returns `TIRO_ERROR_BAD_KEY` if the key is invalid for this record. 


### function tiro_native_type_descriptor

```cpp
const tiro_native_type_t * tiro_native_type_descriptor(
    tiro_vm_t vm,
    tiro_handle_t object
)
```

Returns the address of the `tiro_native_type_t` instance that was used to create the given native object. 

Returns NULL on error. 


### function tiro_native_size

```cpp
size_t tiro_native_size(
    tiro_vm_t vm,
    tiro_handle_t object
)
```

Returns the size (in bytes) of the given native object's user storage. 

Returns 0 on error. 


### function tiro_native_data

```cpp
void * tiro_native_data(
    tiro_vm_t vm,
    tiro_handle_t object
)
```

Returns the address of the allocated user storage of the given native object. 

Returns NULL on error. 


### function tiro_module_get_export

```cpp
void tiro_module_get_export(
    tiro_vm_t vm,
    tiro_handle_t module,
    const char * export_name,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Attempts to retrieve the exported module member called `export_name` from the given module. 

On success, the member will be written to `result`.

Returns `TIRO_ERROR_BAD_TYPE` if the module is not actually of kind `TIRO_KIND_MODULE`. Returns `TIRO_ERROR_EXPORT_NOT_FOUND` if no exported member with that name exists in this module.

TODO: Use tiro strings instead of c strings? Or expose symbols? 


### function tiro_make_tuple

```cpp
void tiro_make_tuple(
    tiro_vm_t vm,
    size_t size,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new tuple with `size` entries. 

All entries are initially null. Returns `TIRO_ERROR_ALLOC` on allocation failure. 


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


### function tiro_make_success

```cpp
void tiro_make_success(
    tiro_vm_t vm,
    tiro_handle_t value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new successful result with the given value. 

The new object will be placed into `result`. 


### function tiro_make_string_from_data

```cpp
void tiro_make_string_from_data(
    tiro_vm_t vm,
    const char * data,
    size_t length,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new string with the given content. 

`data` must consist of `length` readable bytes. Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_make_string

```cpp
void tiro_make_string(
    tiro_vm_t vm,
    const char * value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new string with the given content. 

`value` must be zero terminated or NULL. Passing NULL for `value` creates an empty string. Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_make_record

```cpp
void tiro_make_record(
    tiro_vm_t vm,
    tiro_handle_t keys,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new record with the given key names. 

`keys` must be an array consisting of strings (which mus be unique). The specified keys will be valid propery names on the new record. The value associated with each key will be initialized to null.

Returns `TIRO_ERROR_BAD_TYPE` if `keys` is not an array, or if its contents are not all strings. On success, the constructed record will be assigned to `result`. 


### function tiro_make_null

```cpp
void tiro_make_null(
    tiro_vm_t vm,
    tiro_handle_t result
)
```

Sets the given `result` handle to null. 

### function tiro_make_native

```cpp
void tiro_make_native(
    tiro_vm_t vm,
    const tiro_native_type_t * type_descriptor,
    size_t size,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new native object of the given type and size. 

`type_descriptor` must describe the properties of the new object. The native object will store a copy of this pointer, accessible via `[tiro_native_type()](/docs/api/classes/structtiro__native__type)`. The pointer must remain valid for the lifetime of the object, which usually means the lifetime of the vm itself.

`size` (in bytes) specifies the size that will be allocated as user storage and must be greater than 0.

On success, the constructed object will be written to `result` and the object's user storage will be accessible via `[tiro_native_data()](/docs/api/files/objects_8h#function-tiro_native_data)`. 


### function tiro_make_module

```cpp
void tiro_make_module(
    tiro_vm_t vm,
    const char * name,
    tiro_module_member_t * members,
    size_t members_length,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Creates a new module with the given `name` from the given `members` list. 

**Note**: All members listed in this function call will be exported by the module.

`name` must be a valid, null terminated string and non-empty string.

`members` must be a valid pointer that points to `members_length` entries. When the module has been created successfully, it will be written to `result`.


TODO: Do we need an API for non-exported members? 


### function tiro_make_integer

```cpp
void tiro_make_integer(
    tiro_vm_t vm,
    int64_t value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs an integer with the given value. 

Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_make_float

```cpp
void tiro_make_float(
    tiro_vm_t vm,
    double value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a float with the given value. 

Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_make_error

```cpp
void tiro_make_error(
    tiro_vm_t vm,
    tiro_handle_t error,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new error result with the given error. 

The new object will be placed into `result`. 


### function tiro_make_coroutine

```cpp
void tiro_make_coroutine(
    tiro_vm_t vm,
    tiro_handle_t func,
    tiro_handle_t arguments,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new coroutine that will execute the given function. 

Note that the coroutine will not be started before passing it to `tiro_coroutine_start`.

`func` must be a value of kind `TIRO_KIND_FUNCTION`, otherwise `TIRO_ERROR_BAD_TYPE` is returned.

`arguments` may be a NULL handle, a handle referencing a null value (to pass no arguments) or a tuple of values that will be passed to the function as arguments.

Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_make_boolean

```cpp
void tiro_make_boolean(
    tiro_vm_t vm,
    bool value,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the specified boolean value via the output argument `result`. 

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


### function tiro_make_array

```cpp
void tiro_make_array(
    tiro_vm_t vm,
    size_t initial_capacity,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Constructs a new, empty array with the given initial capacity. 

Returns `TIRO_ERROR_ALLOC` on allocation failure. 


### function tiro_kind_type

```cpp
void tiro_kind_type(
    tiro_vm_t vm,
    tiro_kind_t kind,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the type instance that corresponds to the given `kind` and assigns it to `result`. 

`kind` must represent a valid, exported value kind, otherwise an error is returned instead. 


### function tiro_kind_str

```cpp
const char * tiro_kind_str(
    tiro_kind_t kind
)
```

Returns the name of the kind, formatted as a string. 

The string points into static storage and must not be freed. 


### function tiro_integer_value

```cpp
int64_t tiro_integer_value(
    tiro_vm_t vm,
    tiro_handle_t value
)
```

Returns `value` converted to an integer. 

This function supports conversion for floating point values (they are truncated to an integer). All other values return 0 (use `tiro_value_kind` to disambiguate between types). 


### function tiro_float_value

```cpp
double tiro_float_value(
    tiro_vm_t vm,
    tiro_handle_t value
)
```

Returns the floating point of `value`. 

This function supports conversion for integer values, all other values will return 0 (use `tiro_value_kind` to disambiguate between types). 


### function tiro_exception_message

```cpp
void tiro_exception_message(
    tiro_vm_t vm,
    tiro_handle_t instance,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the message from the exception in `instance` and writes it into `result`. 

When this call is successful, `result` will reference a string. Returns `TIRO_ERROR_BAD_TYPE` if the instance is no exception. 


### function tiro_coroutine_started

```cpp
bool tiro_coroutine_started(
    tiro_vm_t vm,
    tiro_handle_t coroutine
)
```

Returns true if the coroutine has been started, false otherwise. 

### function tiro_coroutine_start

```cpp
void tiro_coroutine_start(
    tiro_vm_t vm,
    tiro_handle_t coroutine,
    tiro_error_t * err
)
```

Starts the given coroutine by scheduling it for execution. 

The coroutine must not have been started before. Coroutines are not invoked from this function. They will be executed from within one of the `tiro_vm_run*` functions. Returns `TIRO_ERROR_BAD_TYPE` if the argument is not a coroutine, or `TIRO_ERROR_BAD_STATE` if the coroutine cannot be started. 


### function tiro_coroutine_set_callback

```cpp
void tiro_coroutine_set_callback(
    tiro_vm_t vm,
    tiro_handle_t coroutine,
    tiro_coroutine_callback callback,
    tiro_coroutine_cleanup cleanup,
    void * userdata,
    tiro_error_t * err
)
```

Schedules the given callback to be invoked once the coroutine completes. 

`coroutine` must be a handle to a coroutine, otherwise `TIRO_ERROR_BAD_TYPE` is returned.

`callback` will be invoked when the coroutine completes its execution. A coroutine completes when the outermost function returns normally or if an uncaught exception is thrown from that function. The callback receives a handle to the completed coroutine, which can be inspected in order to retrieve the coroutine's result, and the original `userdata` argument. It will _not_ be invoked if the virtual machine shuts down before the coroutine has completed. The callback must not be NULL, otherwise `TIRO_ERROR_BAD_ARG` will be returned.

Note: all callback invocations happen from within one of the `tiro_vm_run*` functions.

`cleanup` will be invoked to release state that may be owned by the callback. It will be called directly after the callback has been invoked, or as part of the virtual machine's shutdown procedure. The cleanup function receives the original `userdata` argument. When present, `cleanup` will be called exactly once. The `cleanup` function is optional.

`userdata` will be passed to `callback` and `cleanup` when appropriate, and it will not be used in any other way. 


### function tiro_coroutine_result

```cpp
void tiro_coroutine_result(
    tiro_vm_t vm,
    tiro_handle_t coroutine,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the coroutine's result by assigning it to `result`. 

The coroutine must have completed execution, i.e. `[tiro_coroutine_completed()](/docs/api/files/objects_8h#function-tiro_coroutine_completed)` must return true (for example, when invoked from a coroutine's completion callback). 


### function tiro_coroutine_completed

```cpp
bool tiro_coroutine_completed(
    tiro_vm_t vm,
    tiro_handle_t coroutine
)
```

Returns true if the coroutine has finished its execution, false otherwise. 

### function tiro_boolean_value

```cpp
bool tiro_boolean_value(
    tiro_vm_t vm,
    tiro_handle_t value
)
```

Returns `value` converted to a boolean value. 

`false` and `null` are considered false, all other values will return `true`. 


### function tiro_async_frame_vm

```cpp
tiro_vm_t tiro_async_frame_vm(
    tiro_async_frame_t frame
)
```

Returns the vm instance that this frame belongs to. 

Returns NULL on error. 


### function tiro_async_frame_return_value

```cpp
void tiro_async_frame_return_value(
    tiro_async_frame_t frame,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the return value for the given function call frame to the given `value`. 

Async function frames must be freed (by calling `tiro_async_frame_free`) after they have been completed. 


### function tiro_async_frame_free

```cpp
void tiro_async_frame_free(
    tiro_async_frame_t frame
)
```

Frees an async frame. 

**Warning**: _All_ async call frames must be freed before the vm itself is freed. If there are pending async operations when the vm shall be destroyed, always free them first (they do not have to receive a result). 

Does nothing if `frame` is NULL.

Frames are allocated for the caller before invoking the native callback function. They must be freed by calling this function after async operation has been completed (e.g. after calling `tiro_async_frame_return_value(...)`).


### function tiro_async_frame_closure

```cpp
void tiro_async_frame_closure(
    tiro_async_frame_t frame,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Returns the closure value which was specified when the function was created. 

### function tiro_async_frame_argc

```cpp
size_t tiro_async_frame_argc(
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


### function tiro_array_size

```cpp
size_t tiro_array_size(
    tiro_vm_t vm,
    tiro_handle_t array
)
```

Returns the array's size, or 0 if the given value is not an array (use `tiro_value_kind` to disambiguate between types). 

### function tiro_array_set

```cpp
void tiro_array_set(
    tiro_vm_t vm,
    tiro_handle_t array,
    size_t index,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Sets the array's element at position `index` to `value`. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not an array, or `TIRO_ERROR_OUT_OF_BOUNDS` if the index is out of bounds. 


### function tiro_array_push

```cpp
void tiro_array_push(
    tiro_vm_t vm,
    tiro_handle_t array,
    tiro_handle_t value,
    tiro_error_t * err
)
```

Appends `value` to the given `array`. 

### function tiro_array_pop

```cpp
void tiro_array_pop(
    tiro_vm_t vm,
    tiro_handle_t array,
    tiro_error_t * err
)
```

Removes the last element from the given `array`. 

Does nothing (successfully) if the array is already empty. Returns `TIRO_ERROR_OUT_OF_BOUNDS` if the array is already empty. 


### function tiro_array_get

```cpp
void tiro_array_get(
    tiro_vm_t vm,
    tiro_handle_t array,
    size_t index,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Retrieves the array element at the given `index` from `array` and assigns it to `result`, unless an error occcurs. 

Returns `TIRO_ERROR_BAD_TYPE` if the instance is not an array, or `TIRO_ERROR_OUT_OF_BOUNDS` if the index is out of bounds. 


### function tiro_array_clear

```cpp
void tiro_array_clear(
    tiro_vm_t vm,
    tiro_handle_t array,
    tiro_error_t * err
)
```

Removes all elements from the given `array`. 

Returns `TIRO_ERROR_BAD_TYPE` if the value is not an array. 






-------------------------------

Updated on 24 July 2021 at 14:32:20 CEST
