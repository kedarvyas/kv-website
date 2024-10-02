import React, { useEffect, useRef } from 'react';

const NetworkAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const nodes = [];
    const connections = [];
    const pulses = [];
    const numNodes = 20;

    // Initialize nodes with position and velocity
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
      });
    }

    // Initialize connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.5) {
          connections.push([i, j]);
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      connections.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.stroke();
      });

      // Draw and update pulses
      ctx.lineWidth = 2;
      pulses.forEach((pulse, index) => {
        pulse.progress += 0.02;
        if (pulse.progress > 1) {
          pulses.splice(index, 1);
          return;
        }

        const [i, j] = connections[pulse.connectionIndex];
        const startNode = nodes[i];
        const endNode = nodes[j];
        const x = startNode.x + (endNode.x - startNode.x) * pulse.progress;
        const y = startNode.y + (endNode.y - startNode.y) * pulse.progress;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 0, 0, ${1 - pulse.progress})`;
        ctx.fill();

        // Draw pulse trail
        ctx.beginPath();
        ctx.moveTo(startNode.x, startNode.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(255, 0, 0, ${0.5 - pulse.progress * 0.5})`;
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 0, 0, 0.7)';
        ctx.fill();
      });

      // Randomly add new pulses
      if (Math.random() < 0.05 && connections.length > 0) {
        pulses.push({
          connectionIndex: Math.floor(Math.random() * connections.length),
          progress: 0,
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{
        position: 'absolute',
        top: '120px',
        right: '20px',
        zIndex: 0,
      }}
    />
  );
};

export default NetworkAnimation;