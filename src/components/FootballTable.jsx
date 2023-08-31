/* eslint-disable react/prop-types */
export const FootballTable = ({ league }) => {
    return (
        <div className="w-10/12 bg-purple text-white px-6 py-4 mb-2 rounded-md">
            <div>
                {league.teams.map((team, i) => {
                    if (team.position === 1) {
                        return (
                            <div key={i} className="w-5/6 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img
                                        className="w-10 h-10 mr-1"
                                        src={team.logo}
                                        alt={team.name}
                                    />
                                    <p className="text-lg uppercase">
                                        {team.name}
                                    </p>
                                    <p className="text-md">{team.points}</p>
                                </div>
                            </div>
                        );
                    } else if (team.position > 1 && team.position <= 3) {
                        return (
                            <div
                                key={i}
                                className="flex flex-wrap justify-between items-center mt-2"
                            >
                                <div className="flex items-center">
                                    <p className="w-5">{team.position}</p>
                                    <img
                                        className="w-5 h-5 mr-2"
                                        src={team.logo}
                                        alt={team.name}
                                    />
                                    <p>{team.name}</p>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
