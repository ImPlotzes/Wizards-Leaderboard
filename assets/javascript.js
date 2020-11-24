async function loadLeaderboard() {
    let lb = await fetch("https://leaderboard.plotzes.ml");
    lb = await lb.json();
    if(lb.success) {
        lbData = lb.lb_data;
        let tbody = document.querySelector("tbody");
        const lbLength = lbData.length;
        for(let i = 0; i < lbLength; i++) {
            const player = lbData[i];
            const row = document.createElement("tr");
            const innerRow = `
            <td>${i + 1}</td>
            <td><a href="https://plotzes.ml/stats/?player=${player.name}" target="_blank">${player.name}</a></td>
            <td>${player.points_capture}</td>
            <td>${new Date(player.last_update).toLocaleDateString()} ${new Date(player.last_update).toLocaleTimeString()}</td>`;
            row.innerHTML = innerRow;
            tbody.appendChild(row);
        }
    }
}

window.onload = loadLeaderboard;