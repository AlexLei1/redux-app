export interface IUser {
	id: number
	name: string
}

export interface IInitialUserState {
	isLoading: boolean
	user: IUser
	error: string | null
}
	