export default function Platforms() {
  const platforms = [
    { icon: 'simple-icons:windows', name: 'Windows' },
    { icon: 'simple-icons:apple', name: 'macOS' },
    { icon: 'simple-icons:linux', name: 'Linux' },
    { icon: 'simple-icons:android', name: 'Android' },
    { icon: 'simple-icons:apple', name: 'iOS' },
    { icon: 'simple-icons:googlechrome', name: 'Chrome' },
    { icon: 'simple-icons:firefox', name: 'Firefox' },
    { icon: 'simple-icons:microsoftedge', name: 'Edge' },
    { icon: 'simple-icons:appletv', name: 'Apple TV' },
    { icon: 'simple-icons:amazonfiretv', name: 'Fire TV' },
  ];

  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-8">
        {platforms.map((platform, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon icon={platform.icon} className="w-8 h-8 text-white" />
            <span className="text-sm text-gray-400 mt-2">{platform.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
