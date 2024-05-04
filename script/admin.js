module.exports.config = {
  name: "admin",
  version: "1.0.0",
  role: 3, // Set role to 3 for admin access
  hasPrefix: true,
  usage: '[add/remove] [userID]',
  description: 'Grant or revoke admin privileges to a user',
  credits: 'Me',
  cooldown: 5
};

module.exports.run = async function ({
  api,
  event,
  args
}) {
  const {
    senderID,
    threadID,
    messageID
  } = event;

  // Define the owner's UID
  const ownerUID = "owner_user_id_here";

  // Check if the command is invoked by the owner
  if (senderID !== ownerUID) {
    return api.sendMessage('You are not authorized to use this command.', threadID, messageID);
  }

  // Check if the command has correct usage
  if (args.length !== 2 || (args[0] !== "add" && args[0] !== "remove")) {
    return api.sendMessage('Invalid command usage. Usage: adc [add/remove] [userID]', threadID, messageID);
  }

  // Get the target user's UID
  const targetUID = args[1];

  // Check if the target user is already an admin
  const isAdmin = /* Check if targetUID is already an admin */;

  // Grant or revoke admin privileges based on the command
  if (args[0] === "add") {
    if (isAdmin) {
      return api.sendMessage('User is already an admin.', threadID, messageID);
    } else {
      // Grant admin privileges to the target user
      /* Add targetUID to the list of admins */
      return api.sendMessage('Admin privileges granted to the user.', threadID, messageID);
    }
  } else if (args[0] === "remove") {
    if (!isAdmin) {
      return api.sendMessage('User is not an admin.', threadID, messageID);
    } else {
      // Revoke admin privileges from the target user
      /* Remove targetUID from the list of admins */
      return api.sendMessage('Admin privileges revoked from the user.', threadID, messageID);
    }
  }
};
