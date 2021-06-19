add_executable(tiro_wasm
    wasm_bindings.cpp
    runtime.hpp
    runtime.cpp
)
set_target_properties(tiro_wasm PROPERTIES OUTPUT_NAME "tiro")
target_link_libraries(tiro_wasm PRIVATE tiro::tiropp)
