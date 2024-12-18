export class Users {
    id: string | null = '';
    name: string | null = '';
    email: string | null = '';

    Users(id: string, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
