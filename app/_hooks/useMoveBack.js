import { useRouter } from "next/router";

export function useMoveBack(){
    const Router = useRouter();
    return ()=>Router.back();
}