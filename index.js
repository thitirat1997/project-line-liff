{/* <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script> */}

      async function main() {
        await liff.init({ liffId: "1656245031-Y41Ab4oV" });

        if (liff.isLoggedIn()) {
          getUserProfile();
        } else {
          liff.login({
            redirectUri:
              "https://thitirat1997.github.io/project-line-liff/",
          });
          // liff.login();
        }
      }
      main();

      async function getUserProfile() {
        const profile = await liff.getUserProfile();
        // document.getElementById("pictureUrl").src = profile.pictureUrl
        // document.getElementById("displaName").append = profile.displayName
        // document.getElementById("statusMessage").append = profile.statusMessage
        const pictureUrl = document.getElementById("pictureUrl")
        const displayName = document.getElementById("displayName")
        const statusMessage = document.getElementById("statusMessage")
        
      }

    //   function logOut() {
    //     liff.logOut();
    //     window.location.reload();
    //   }

      // logout call only when external browse
    document.getElementById('liffLogoutButton').addEventListener('click', function() {
    if (liff.isLoggedIn()) {
        liff.logout();
        window.location.reload();
    }
})