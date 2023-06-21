import User from "../modules/user.js";
import encrypt from "encryptjs";
import axios from "axios";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const response = await User.find({ email }).exec();
        if (response.length) return res.send("email is already in use");

        const secretpass = "pass";
        const encryptpass = encrypt.encrypt(password, secretpass, 256);

        const user = new User({
            name,
            email,
            password: encryptpass
        });

        await user.save();
        return res.send("registration successful.")
    } catch (error) {
        return res.send(error)
    }
}

export const searchByLocation = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-location',
            params: {
                location: 'Paris',
                checkin: '2023-09-16',
                checkout: '2023-09-17',
                adults: '1',
                children: '0',
                infants: '0',
                pets: '0',
                page: '1',
                currency: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': '1b36ac4e46msh9c9d8c83b49c50ap114021jsn14e58e8aa2a3',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };


        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        return res.send(error);
    }
}

export const autoComplete = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/autocomplete',
            params: { query: 'paris' },
            headers: {
                'X-RapidAPI-Key': '1b36ac4e46msh9c9d8c83b49c50ap114021jsn14e58e8aa2a3',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        return res, send(error)
    }
}

export const searchbyGeoCoordinate = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/search-geo',
            params: {
                ne_lat: '52.51',
                ne_lng: '13.41',
                sw_lat: '52.41',
                sw_lng: '13.31',
                checkin: '2023-09-15',
                checkout: '2023-09-16',
                adults: '1',
                children: '0',
                infants: '0',
                pets: '0',
                page: '1',
                currency: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': '1b36ac4e46msh9c9d8c83b49c50ap114021jsn14e58e8aa2a3',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        return res.send(error)
    }
}

export const calender = async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://airbnb13.p.rapidapi.com/calendar',
            params: {
                room_id: '18951965',
                currency: 'USD',
                year: '2023',
                month: '12',
                count: '1'
            },
            headers: {
                'X-RapidAPI-Key': '1b36ac4e46msh9c9d8c83b49c50ap114021jsn14e58e8aa2a3',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        return res.send(error)
    }
}