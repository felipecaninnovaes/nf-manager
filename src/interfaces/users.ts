export interface IUsers {
  email: string
  firstname: string
  iduser: string
  secondname: string
}

export interface IUsersData {
  Data: IUsers[]
  Message: string
  StatusCode: number
  }