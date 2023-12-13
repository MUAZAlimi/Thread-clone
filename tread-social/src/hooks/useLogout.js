import useShowToast from './useShowToast';
import { useRecoilState, } from 'recoil';
import userAtom from '../atoms/userAtom';

const useLogOut = () => {
    const setUser = useRecoilState(userAtom);
    const showToast = useShowToast()
    
    const logout = async () => {
        try {
          const res = await fetch("/api/users/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
    
          if (data.error) {
            showToast("Error", data.error, "error");
            return;
          }
          localStorage.removeItem("user-threads");
          setUser(null);
        } catch (error) {
          showToast("Error", error, "error");
        }
    }
}

export default useLogOut