const img1 = new Image(200, 200); // width, height
img1.src = "https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg";
document.body.appendChild(img1);

const img2 = new Image(200, 200); // width, height
img2.src = "https://i.pinimg.com/564x/1b/14/34/1b1434c7d78bca9e24bcb89e5126903c.jpg";

var profile = {
    name: "test",
    user: "@test",
    profile: function() {
        return this.name + " " + this.user;
    }
}

document.write(JSON.stringify(profile.name + " " + profile.user));

document.write("<br>");




