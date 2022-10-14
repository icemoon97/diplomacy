
// record is {"game_id":, "defcon": {"time-pair": defcon}]}


export function saveDefconLabels(game, labels) {
    // if (game.client) {
    //     game.client.save()
    //         .then((savedData) => {
    //             const domLink = document.createElement('a');
    //             domLink.setAttribute(
    //                 'href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(savedData)));
    //             domLink.setAttribute('download', `${game.game_id}.json`);
    //             domLink.style.display = 'none';
    //             document.body.appendChild(domLink);
    //             domLink.click();
    //             document.body.removeChild(domLink);
    //         })
    //         .catch(exc => onError(`Error while saving game: ${exc.toString()}`));
    // } else {
    //     onError(`Cannot save this game.`);
    // }
    labels.game_id = game.game_id;

    const domLink = document.createElement('a');
    domLink.setAttribute(
        'href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(labels)));
    domLink.setAttribute('download', `${labels.game_id}.json`);
    domLink.style.display = 'none';
    document.body.appendChild(domLink);
    domLink.click();
    document.body.removeChild(domLink);
}