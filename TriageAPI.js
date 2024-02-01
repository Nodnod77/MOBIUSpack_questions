/* Pour cette fonction nous allons trier un tableau de "user". Un user est le json suivant :
"user1": {
    id: 2,
    name: "John",
    age: 27
},
La méthode trie soit dans l'ordre croissant décroissant les trois attributs id name et age.
 */

const compareValues = (a, b, isAscending) => {
    if (isAscending) {
        return a - b;
    } else {
        return b - a;
    }
};

const sortUsers = (jsonUsers, attribute, isAscending) => {
     const users = Object.values(jsonUsers);
     //console.log("users",users);
    switch (attribute) {
        case "name":
            return users.sort((a, b) => {
                const nameA = a["name"].toLowerCase();
                const nameB = b["name"].toLowerCase();
                return compareValues(nameA.localeCompare(nameB), 0, isAscending);
            });
            break;
        case "id":
            return users.sort((a, b) => compareValues(a["id"], b["id"], isAscending));
            break;
        case "age":
            return users.sort((a, b) => compareValues(a["age"], b["age"], isAscending));
            break;
        default:
            throw new Error(`Paramètres "${attribute}" non valide`);
    }
};

const APIResponse = {
    "user1": { id: 2, name: "John", age: 27 },
    "user2": { id: 1, name: "Gaspard", age: 29 },
    "user3": { id: 3, name: "Donia", age: 29 },
    "user4": { id: 4, name: "Test", age: 67 },
};


console.log("Par nom en ordre alphabétique:", JSON.stringify(sortUsers(APIResponse, "name", true), null, 2));

console.log("Par id décroissant:", JSON.stringify(sortUsers(APIResponse, "id", false), null, 2));

console.log("Par âge croissant:", JSON.stringify(sortUsers(APIResponse, "age", true), null, 2));
