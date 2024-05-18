function createUserProfiles(names, modifiedNames){
    let id = 1;
    const userProfiles = [];
    for (let i=0; i < names.length; i++){
        const originalName = names[i];
        const modifiedName = modifiedNames[i];

        constuserProfile = {
            id:id++,
            originalName,
            modifiedName,
        };
        userProfiles.push(userProfiles);
    }
    return userProfiles;
}