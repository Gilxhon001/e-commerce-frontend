import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {User} from "firebase/auth";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils.ts";

interface UserContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
    currentUser: null,
    setCurrentUser: () => {
    },
});

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
