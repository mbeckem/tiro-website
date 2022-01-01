---
title: Classes

---

# Classes




* **namespace [std](/docs/api/namespaces/namespacestd)** <br>STL namespace. 
* **namespace [tiro](/docs/api/namespaces/namespacetiro)** 
    * **class [api_error](/docs/api/classes/classtiro_1_1api__error)** <br>Represents an error thrown by the tiro c library. 
    * **class [array](/docs/api/classes/classtiro_1_1array)** <br>Refers to an array value. 
    * **class [async_frame](/docs/api/classes/classtiro_1_1async__frame)** <br>Represents the call frame of a asynchronous function call. 
    * **class [bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast)** <br>Thrown when an invalid cast is attempted. 
    * **class [bad_handle_check](/docs/api/classes/classtiro_1_1bad__handle__check)** <br>Thrown when a debug mode handle check failed. 
    * **class [boolean](/docs/api/classes/classtiro_1_1boolean)** <br>Refers to a boolean value (true or false). 
    * **class [compiled_module](/docs/api/classes/classtiro_1_1compiled__module)** <br>Represents a compiled bytecode module. 
    * **class [compiler](/docs/api/classes/classtiro_1_1compiler)** <br>Translates a set of source files into a module. 
        * **struct [state_t](/docs/api/classes/structtiro_1_1compiler_1_1state__t)** 
    * **struct [compiler_message](/docs/api/classes/structtiro_1_1compiler__message)** <br>Represents a diagnostic message emitted by the compiler. 
    * **struct [compiler_settings](/docs/api/classes/structtiro_1_1compiler__settings)** <br>An instance of this type can be passed to the compiler to configure it. 
    * **class [coroutine](/docs/api/classes/classtiro_1_1coroutine)** <br>Refers to a coroutine. 
        * **struct [callback_wrapper](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper)** 
        * **struct [in_place_t](/docs/api/classes/structtiro_1_1coroutine_1_1in__place__t)** 
    * **namespace [detail](/docs/api/namespaces/namespacetiro_1_1detail)** 
        * **struct [native_traits](/docs/api/classes/structtiro_1_1detail_1_1native__traits)** 
            * **struct [layout](/docs/api/classes/structtiro_1_1detail_1_1native__traits_1_1layout)** 
        * **struct [native_type_data](/docs/api/classes/structtiro_1_1detail_1_1native__type__data)** 
        * **class [resource_holder](/docs/api/classes/classtiro_1_1detail_1_1resource__holder)** 
    * **class [error](/docs/api/classes/classtiro_1_1error)** <br>Base class for all errors thrown by this library. 
    * **class [error_adapter](/docs/api/classes/classtiro_1_1error__adapter)** <br>Error adapter class for the tiro_error_t* argument expected by most tiro_* functions. 
    * **class [exception](/docs/api/classes/classtiro_1_1exception)** <br>Refers to an exception. 
    * **class [float_](/docs/api/classes/classtiro_1_1float__)** <br>Refers to a float value. 
    * **class [function](/docs/api/classes/classtiro_1_1function)** <br>Refers to a function value. 
    * **class [generic_error](/docs/api/classes/classtiro_1_1generic__error)** <br>Generic error with a simple message. 
    * **class [handle](/docs/api/classes/classtiro_1_1handle)** <br>A handle represents a reference to an object. 
        * **struct [check_kind_t](/docs/api/classes/structtiro_1_1handle_1_1check__kind__t)** 
        * **struct [holder](/docs/api/classes/structtiro_1_1handle_1_1holder)** 
    * **class [integer](/docs/api/classes/classtiro_1_1integer)** <br>Refers to an integer value. 
    * **class [module](/docs/api/classes/classtiro_1_1module)** <br>Refers to a module. 
    * **class [native](/docs/api/classes/classtiro_1_1native)** <br>Refers to a native object. 
    * **class [native_type](/docs/api/classes/classtiro_1_1native__type)** 
    * **class [null](/docs/api/classes/classtiro_1_1null)** <br>Refers to a null value. 
    * **class [record](/docs/api/classes/classtiro_1_1record)** <br>Refers to a record value. 
    * **class [result](/docs/api/classes/classtiro_1_1result)** <br>Refers to a result value. 
    * **class [string](/docs/api/classes/classtiro_1_1string)** <br>Refers to a string value. 
    * **class [sync_frame](/docs/api/classes/classtiro_1_1sync__frame)** <br>Represents the call frame of a synchronous function call. 
    * **class [tuple](/docs/api/classes/classtiro_1_1tuple)** <br>Refers to a tuple value. 
    * **class [type](/docs/api/classes/classtiro_1_1type)** <br>Refers to a type. 
    * **struct [version](/docs/api/classes/structtiro_1_1version)** <br>Represents a library version. 
    * **class [vm](/docs/api/classes/classtiro_1_1vm)** 
    * **struct [vm_settings](/docs/api/classes/structtiro_1_1vm__settings)** <br>Settings to control the construction of a virtual machine. 
* **struct [tiro_compiler_message](/docs/api/classes/structtiro__compiler__message)** <br>Represents a diagnostic message emitted by the compiler. 
* **struct [tiro_compiler_settings](/docs/api/classes/structtiro__compiler__settings)** <br>An instance of this type can be passed to the compiler to configure it. 
* **struct [tiro_module_member_t](/docs/api/classes/structtiro__module__member__t)** 
* **struct [tiro_native_type](/docs/api/classes/structtiro__native__type)** <br>Describes a native object type to the tiro runtime. 
* **struct [tiro_string](/docs/api/classes/structtiro__string)** <br>Represents a string that is not necessarily zero terminated. 
* **struct [tiro_vm_settings](/docs/api/classes/structtiro__vm__settings)** <br>The [tiro_vm_settings]() structure can be provided to `tiro_vm_new` as a configuration parameter. 



-------------------------------

Updated on 2022-01-01 at 12:38:40 +0100
