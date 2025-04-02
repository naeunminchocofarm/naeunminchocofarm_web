const webSocketPaths = {
  production: "ws://192.168.30.128:8080/ws",
  local: "ws://localhost:8081/ws",
  dev: "ws://192.168.30.128:8081/ws",
  eun: "ws://192.168.30.78:8081/ws",
};

const subscribePaths = {
  testSubject: "test-subject",
  motionDetecting: "motion-detecting",
  awning: "awning"
};

export { webSocketPaths, subscribePaths };
