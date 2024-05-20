import React, {FC} from 'react';

export interface IUserProps {
    id: number,
    firstName: string,
    lastName: string,
    maidenName?: string,
    age?: number,
    gender?: string,
    email: string,
    phone?: string,
    username?: string,
    password?: string,
    birthDate?: string,
    image: string,
    bloodGroup?: string,
    height?: number,
    weight?: number,
    eyeColor?: string,
    hair?: {
        color: string,
        type: string
    },
    domain?: string,
    ip?: string,
    address?: {
        address: string,
        city: string,
        coordinates: {
            lat: number,
            lng: number
        },
        postalCode: string,
        state: string
    },
    macAddress?: string,
    university?: string,
    bank?: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company?: {
        address: {
            address: string,
            city: string,
            coordinates: {
                lat: number,
                lng: number
            },
            postalCode: string,
            state: string
        },
        department: string,
        name: string,
        title: string
    },
    ein?: string,
    ssn?: string,
    userAgent?: string
}

export type IUserType = IUserProps & {children?:React.ReactNode}

const User:FC<IUserType> = ({id, firstName, lastName, email, image}) => {



    return (
        <div>
            <h4>{id}</h4>
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <img src={image} alt={firstName}/>
        </div>
    );
};

export default User;
