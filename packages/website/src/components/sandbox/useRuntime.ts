import { createRuntime, Runtime } from "@/runtime";
import { AsyncResult, useAsync } from "@/hooks/useAsync";

export function useRuntime(): AsyncResult<Runtime> {
    const result = useAsync(createRuntime, (runtime) => runtime.destroy());
    return result;
}
