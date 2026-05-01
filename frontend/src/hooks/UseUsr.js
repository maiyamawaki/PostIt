import { createUsr, updateUsr} from "../api/usrApi";

export const useCreateUsr = () => {
	const handleCreate = async(userName, email, password) => {
		try {
			await createUsr(userName, email, password);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleCreate};
}

export const useUpdateUsr = (userId) => { 
	const handleUpdate = async(userName, email, password) => {
		try {
			await updateUsr(userId, userName, email, password);
		} catch(err) {
			console.log(err);
		}
	}
	return {handleUpdate}
}



