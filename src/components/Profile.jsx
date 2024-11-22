import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux"

const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    return (
        <div className="text-black min-h-screen p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 px-2">
                <div>
                    <h1 className="text-xl font-semibold">{profile.username}</h1>
                </div>
                <div>
                    <Button className="text-xl font-semibold rounded-lg hover:bg-primaryHover" sx={{ background: "rgb(24 118 45)", color: "black" }}><EditIcon /> Edit</Button>
                </div>
            </div>

            <hr className="m-3 border-customBorder"></hr>

            {/* Profile Info */}
            <div className="flex items-center space-x-5">
                <div className="w-20 h-20 rounded-full border-2 border-primary">
                    <img
                        src={profile.profilePicture}
                        alt="Profile"
                        className="rounded-full w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="text-lg font-bold">{profile.name}</h2>
                    <p className="text-sm text-slate-800">Student | Full Stack Developer</p>
                </div>
            </div>

            {/* User Data */}
            <div className="flex justify-around mt-4 ">
                <div>
                    <h3 className="text-lg font-bold">{profile.stats.projects}</h3>
                    <p className="text-sm text-slate-800">Projects</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{profile.stats.followers}</h3>
                    <p className="text-sm text-slate-800">Followers</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold">{profile.stats.following}</h3>
                    <p className="text-sm text-slate-800">Following</p>
                </div>
            </div>

            {/* About */}
            <div className="mt-6">
                <h1>{profile.bio}</h1>
                <p className="text-sm">
                    {profile.desc}
                </p>
                <a
                    href={profile.githubLink}
                    className="block text-primary mt-2 hover:underline"
                >
                    https://github.com/adityakumar841208
                </a>
                <button className="mt-2 px-4 py-2 bg-primary rounded-full text-black hover:bg-primaryHover" onClick={profile.resumeLink}>
                    Download Resume / CV
                </button>
            </div>

            {/* Skills */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap mt-2">
                    {profile.skills.map((skill) => (
                        <span
                            key={skill}
                            className="bg-slate-700 text-gray-300 text-sm px-3 py-1 rounded-full m-1"
                        >
                            {skill}
                        </span>

                    ))}
                    <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full m-1">Add +</button>
                </div>
            </div>

            {/* Ongoing Projects */}
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Ongoing Projects</h3>
                    <Button className="text-xl font-semibold rounded-lg hover:bg-primaryHover" sx={{ background: "rgb(24 118 45)", color: "white" }}>Add Projects</Button>
                </div>
                <div className="mt-4 space-y-4">
                    {profile.ongoingProjects.map((item) => (
                        <>
                            <div className="flex items-center space-x-4 bg-slate-700 p-4 rounded-md" key={item.name}>
                                <img
                                    src={item.image}
                                    alt="CodeLabs"
                                    className="w-12 h-12 rounded-md"
                                />
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-sm text-gray-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;
