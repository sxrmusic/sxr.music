window.addEventListener('load', function() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        alert('MetaMask is not installed. Please install it to use this app.');
        return;
    }

    const connectWalletButton = document.getElementById('connectWallet');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');

    connectWalletButton.addEventListener('click', async () => {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            console.log('Connected account:', account);
            connectWalletButton.innerText = 'Wallet Connected';
            
            // Load the music file (you need to have this file hosted somewhere)
            audioSource.src = 'https://share.bridge.audio/sxr-music-group/1--stockholm-syndrome?id=ee4347be-20d6-45a3-909f-d08a0f8d322a'; // Replace with your music file URL
            audioPlayer.load();
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    });
});
