import { createRuntime, Runtime } from "@src/runtime";
import { AsyncResult, useAsync } from "@src/hooks/useAsync";

export function useRuntime(): AsyncResult<Runtime> {
    const result = useAsync(createRuntime, (runtime) => runtime.destroy());
    return result;
}
