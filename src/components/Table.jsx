/* eslint-disable react/prop-types */
const Table = ({ league }) => {
    return (
        <>
            {league && (
                <div className="p-4 w-1/2">
                    <div className="flex items-center"> 
                        <img src={league.logo} alt={league.name} width={25} />
                        <h2 className="ml-3 text-xl">{league.name}</h2>
                    </div>
                    <table className="w-full mt-[1px]">
                        <thead className="bg-purple">
                            <tr className="text-white">
                                <th className="text-left">No.</th>
                                <th className="text-left">Team</th>
                                <th className="text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {league.teams.map((team) => (
                                <tr key={team.name}>
                                    <td>{team.position}</td>
                                    <td>{team.name}</td>
                                    <td className="text-right">
                                        {team.points}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
};

export default Table;
