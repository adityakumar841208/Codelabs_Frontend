import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "@aditya",
    name: "Aditya Kumar",
    bio: "MERN Stack Developer | Passionate Problem Solver | Tech Enthusiast",
    desc: "Hi, I'm Aditya! A dedicated MERN stack developer with a knack for crafting efficient, user-friendly web applications. I thrive on building innovative solutions and exploring cutting-edge technologies.",
    profilePicture: "../comp.webp",
    githubLink: "https://github.com/adityakumar841208",
    resumeLink: "",
    stats: {
        projects: 23,
        followers: "30K",
        following: 235,
    },
    skills: [
        "HTML",
        "React.js",
        "JavaScript",
        "Bootstrap",
        "JQuery",
        "React Native",
        "Node.js",
        "SQL",
        "MongoDB",
    ],
    ongoingProjects: [
        {
            name: "Collage Management",
            description: "A system for managing college operations.",
            image: "../comp.webp",
        },
        {
            name: "Collage Management",
            description: "A system for managing college operations.",
            image: "../comp.webp",
        },
        {
            name: "Collage Management",
            description: "A system for managing college operations.",
            image: "../comp.webp",
        },
    ],
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile(state, action) {
            return { ...state, ...action.payload };
        },
        updateDesc(state, action) {
            return { ...state, ...action.payload }
        },
        addSkill(state, action) {
            state.skills.push(action.payload);
        },
        addOngoingProject(state, action) {
            state.ongoingProjects.push(action.payload);
        },
    },
});

export const { updateProfile, addSkill, addOngoingProject, updateDesc } = profileSlice.actions;
export default profileSlice.reducer;
